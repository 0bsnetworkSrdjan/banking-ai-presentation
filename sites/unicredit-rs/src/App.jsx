import { useCallback, useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { TopBar } from './components/TopBar'
import { SlideDeck } from './components/SlideDeck'
import { ProgressRail } from './components/ProgressRail'
import { LanguageSelector } from './components/LanguageSelector'
import { slides, LANGUAGES, DEFAULT_LANG } from './slides'

// ─── Animation presets ─────────────────────────────────────────────────────
// Each preset defines GSAP fromTo state plus optional timing defaults.
// Slides can override duration/stagger via anim_duration / anim_stagger.

const PRESETS = {
  'fade-up': {
    from: { opacity: 0, y: 24, filter: 'blur(8px)' },
    to:   { opacity: 1, y: 0,  filter: 'blur(0px)', ease: 'power2.out' },
  },
  'fade-in': {
    from: { opacity: 0 },
    to:   { opacity: 1, ease: 'power2.out' },
  },
  'rise': {
    from: { opacity: 0, y: 56 },
    to:   { opacity: 1, y: 0,  ease: 'power3.out' },
  },
  'blur-in': {
    from: { opacity: 0, filter: 'blur(22px)', scale: 0.98 },
    to:   { opacity: 1, filter: 'blur(0px)',  scale: 1,    ease: 'power2.out' },
    defaultDuration: 0.7,
    defaultStagger:  0.12,
  },
  'stagger': {
    from: { opacity: 0, y: 18, filter: 'blur(4px)' },
    to:   { opacity: 1, y: 0,  filter: 'blur(0px)', ease: 'power1.out' },
    defaultDuration: 0.55,
    defaultStagger:  0.18,
  },
  // instant is handled as a special case (gsap.set, no animation)
  'instant': null,
}

function App() {
  const deckRef      = useRef(null)
  const indexRef     = useRef(0)
  const wheelLockRef = useRef(0)
  const [activeSlide, setActiveSlide] = useState(0)
  const [lang, setLang] = useState(
    () => localStorage.getItem('presentation-lang') ?? DEFAULT_LANG,
  )

  const activeTone    = slides[activeSlide]?.tone ?? 'section-a'
  const activeSection = slides[activeSlide]

  const handleLangSelect = useCallback((code) => {
    setLang(code)
    localStorage.setItem('presentation-lang', code)
  }, [])

  // Navigate to a slide — scrolls the deck div directly.
  const goTo = useCallback((raw) => {
    const i = Math.max(0, Math.min(raw, slides.length - 1))
    if (i === indexRef.current) return
    indexRef.current = i
    setActiveSlide(i)
    const el = deckRef.current
    if (el) el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' })
  }, [])

  // Wheel + keyboard — attached once, reference-stable via indexRef.
  useEffect(() => {
    const el = deckRef.current
    if (!el) return

    const onWheel = (e) => {
      const delta = e.deltaY + e.deltaX
      if (Math.abs(delta) < 18) return
      e.preventDefault()
      const now = performance.now()
      if (now - wheelLockRef.current < 680) return
      wheelLockRef.current = now
      goTo(indexRef.current + (delta > 0 ? 1 : -1))
    }

    const onKey = (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
      e.preventDefault()
      goTo(indexRef.current + (e.key === 'ArrowRight' ? 1 : -1))
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('keydown', onKey)

    return () => {
      el.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKey)
    }
  }, [goTo])

  // Re-snap position on window resize.
  useEffect(() => {
    const snap = () => {
      const el = deckRef.current
      if (el) el.scrollLeft = indexRef.current * el.clientWidth
    }
    window.addEventListener('resize', snap)
    return () => window.removeEventListener('resize', snap)
  }, [])

  // GSAP content reveal — uses per-slide animation preset if defined.
  useEffect(() => {
    const slide     = slides[activeSlide]
    const name      = slide?.animation ?? 'fade-up'
    const preset    = PRESETS[name] ?? PRESETS['fade-up']
    const duration  = slide?.anim_duration ?? preset?.defaultDuration ?? 0.5
    const stagger   = slide?.anim_stagger  ?? preset?.defaultStagger  ?? 0.07
    const target    = '.slide.is-active .animated'

    if (name === 'instant' || !preset) {
      gsap.set(target, { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 })
      return
    }

    gsap.fromTo(target, preset.from, { ...preset.to, duration, stagger, overwrite: 'auto' })
  }, [activeSlide])

  return (
    <main className={`app-shell ${activeTone}`}>
      <TopBar
        activeSection={activeSection}
        activeSlide={activeSlide}
        totalSlides={slides.length}
        lang={lang}
        langSelector={
          <LanguageSelector
            languages={LANGUAGES}
            currentLang={lang}
            onSelect={handleLangSelect}
          />
        }
      />
      <SlideDeck deckRef={deckRef} slides={slides} activeSlide={activeSlide} lang={lang} />
      <ProgressRail slides={slides} activeSlide={activeSlide} onSelect={goTo} />
    </main>
  )
}

export default App
