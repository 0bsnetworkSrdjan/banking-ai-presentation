import { SlideFrame } from './SlideFrame'

export function SlideDeck({ deckRef, slides, activeSlide, lang, tocRevealStep = 0 }) {
  return (
    <section className="deck" ref={deckRef} aria-label="Horizontal workshop slides">
      {slides.map((slide, index) => (
        <SlideFrame
          key={index}
          slide={slide}
          isActive={index === activeSlide}
          lang={lang}
          tocRevealStep={tocRevealStep}
        />
      ))}
    </section>
  )
}
