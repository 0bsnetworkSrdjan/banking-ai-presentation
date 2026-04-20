import { useState } from 'react'
import { motion } from 'motion/react'
import { t, tSide } from '../i18n'
import { RichText } from './RichText'
import { VectorSpaceSlide } from './VectorSpaceSlide'

function L(slide, lang) {
  return slide.no_translate ? 'en' : lang
}

// ─── Layout renderers ──────────────────────────────────────────────────────

function HeaderGlass({ slide, styleClass, lang }) {
  const lg = L(slide, lang)
  const preTitle = slide.pre_title ? t(slide.pre_title, lg) : null
  const kicker = t(slide.kicker, lg)
  const title = t(slide.title, lg)
  if (!preTitle && !kicker && !title) return null
  return (
    <div className={`slide-glass slide-glass--header ${styleClass}`}>
      <div className="slide-header-inner">
        {kicker && <p className="kicker animated">{kicker}</p>}
        {preTitle && (
          <p className="pre-title animated">
            <RichText>{preTitle}</RichText>
          </p>
        )}
        {title && (
          <h1 className="animated">
            <RichText>{title}</RichText>
          </h1>
        )}
        {(slide.section || slide.chapter) && !slide.hideSectionChip && (
          <div className="section-chip animated">
            {slide.section && <span>{t(slide.section, lg)}</span>}
            {slide.chapter && <span>{slide.chapter}</span>}
          </div>
        )}
      </div>
    </div>
  )
}

function BodyGlass({ slide, styleClass, lang }) {
  const lg = L(slide, lang)
  const body = t(slide.body, lg)
  const bullets = t(slide.bullets, lg)
  if (!body && !bullets?.length) return null

  const kicker = t(slide.kicker, lg)
  const title = t(slide.title, lg)
  const showChip = !kicker && !title && (slide.section || slide.chapter)

  return (
    <div className={`slide-glass slide-glass--body ${styleClass}`}>
      <div className="slide-content__inner">
        {showChip && (
          <div className="section-chip animated">
            {slide.section && <span>{t(slide.section, lg)}</span>}
            {slide.chapter && <span>{slide.chapter}</span>}
          </div>
        )}
        {body && (
          <p className={['lead', 'animated', slide.bodyClass].filter(Boolean).join(' ')}>
            <RichText>{body}</RichText>
          </p>
        )}
        {bullets?.length > 0 && (
          <ul className="points">
            {bullets.map((b) => (
              <li className="animated" key={b}>
                <RichText>{b}</RichText>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

function TitleContent({ slide, lang }) {
  const lg = L(slide, lang)
  const kicker = t(slide.kicker, lg)
  const title = t(slide.title, lg)
  const subtitle = t(slide.subtitle, lg)
  const extras = slide.quoteVariants?.[lg]

  return (
    <div className="slide-content__inner slide-content__inner--title">
      {kicker && (
        <p className="kicker animated">
          <RichText>{kicker}</RichText>
        </p>
      )}
      {title && (
        <h1 className="animated">
          <RichText>{title}</RichText>
        </h1>
      )}
      {subtitle && (
        <p className="subtitle animated">
          <RichText>{subtitle}</RichText>
        </p>
      )}
      {extras?.map((line, i) => (
        <p key={i} className="title-quote-variant animated">
          <RichText>{line}</RichText>
        </p>
      ))}
    </div>
  )
}

function QuoteContent({ slide, lang }) {
  const lg = L(slide, lang)
  return (
    <div className="slide-content__inner slide-content__inner--quote">
      <blockquote>
        <p className="animated">
          <RichText>{t(slide.quote, lg)}</RichText>
        </p>
        {t(slide.attribution, lg) && (
          <cite className="animated">
            <RichText>{t(slide.attribution, lg)}</RichText>
          </cite>
        )}
      </blockquote>
    </div>
  )
}

function ColContent({ side, lang }) {
  const resolved = tSide(side, lang)
  if (!resolved) return null
  return (
    <div className="slide-content__inner">
      {resolved.kicker && <p className="kicker animated">{resolved.kicker}</p>}
      {resolved.title && (
        <h2 className="animated">
          <RichText>{resolved.title}</RichText>
        </h2>
      )}
      {resolved.icon && (
        <div className="col-icon-wrap animated" aria-hidden="true">
          <DeckIcon name={resolved.icon} />
        </div>
      )}
      {resolved.subtitle && (
        <p className="col-role animated">
          <RichText>{resolved.subtitle}</RichText>
        </p>
      )}
      {resolved.body && (
        <p className="lead animated">
          <RichText>{resolved.body}</RichText>
        </p>
      )}
      {resolved.bullets?.length > 0 && (
        <ul className="points">
          {resolved.bullets.map((b) => (
            <li className="animated" key={b}>
              <RichText>{b}</RichText>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function SingleExtendedBody({ slide, styleClass, lang }) {
  const lg = L(slide, lang)
  const body = t(slide.body, lg)
  const blockquote = slide.blockquote ? t(slide.blockquote, lg) : null
  const body2 = slide.body2 ? t(slide.body2, lg) : null
  const body3 = slide.body3 ? t(slide.body3, lg) : null

  return (
    <div className={`slide-glass slide-glass--body ${styleClass}`}>
      <div className="slide-content__inner">
        {body && (
          <p className="lead animated">
            <RichText>{body}</RichText>
          </p>
        )}
        {blockquote && (
          <blockquote className="emphasis-panel animated">
            <p>
              <RichText>{blockquote}</RichText>
            </p>
          </blockquote>
        )}
        {body2 && (
          <p className="lead animated">
            <RichText>{body2}</RichText>
          </p>
        )}
        {body3 && (
          <p className="lead animated lead--trailing">
            <RichText>{body3}</RichText>
          </p>
        )}
      </div>
    </div>
  )
}

function LeftSplitContent({ side, lang }) {
  const resolved = tSide(side, lang)
  const sections = side?.sections
  const link = side?.link

  if (!resolved?.body && !sections?.length && !link) return null

  return (
    <div className="slide-content__inner slide-content__inner--split-left">
      {resolved?.body && (
        <p className="lead animated">
          <RichText>{resolved.body}</RichText>
        </p>
      )}
      {sections?.map((sec, i) => {
        const heading = t(sec.heading, lang)
        const bullets = sec.bullets ? t(sec.bullets, lang) : null
        const body = sec.body ? t(sec.body, lang) : null
        return (
          <div key={i} className="column-subsection animated">
            {heading && <h3 className="column-subheading">{heading}</h3>}
            {bullets?.length > 0 && (
              <ul className="column-sub-bullets">
                {bullets.map((b) => (
                  <li key={b}>
                    <RichText>{b}</RichText>
                  </li>
                ))}
              </ul>
            )}
            {body && (
              <p className="lead lead--compact">
                <RichText>{body}</RichText>
              </p>
            )}
          </div>
        )
      })}
      {link && (
        <a className="split-left-link animated" href={link.href} target="_blank" rel="noreferrer">
          {link.label}
        </a>
      )}
    </div>
  )
}

function StatBlock({ stats }) {
  if (!stats?.length) return null
  const layoutClass = stats.length >= 2 ? 'stat-row stat-row--spread' : 'stat-row stat-row--stack'

  return (
    <div className={`slide-content__inner slide-content__inner--stats ${layoutClass}`}>
      {stats.map((s, i) => (
        <div key={i} className="stat-unit animated">
          <span className="stat-num">
            <RichText>{s.number}</RichText>
          </span>
          <span className="stat-desc">
            <RichText>{s.label}</RichText>
          </span>
        </div>
      ))}
    </div>
  )
}

function DeckIcon({ name }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className: 'icon-grid__glyph',
  }
  switch (name) {
    case 'brain':
      return (
        <svg {...common}>
          <path
            d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      )
    case 'layers':
      return (
        <svg {...common}>
          <path d="m12.83 2.18 8 3.5v11.64l-8 3.5-8-3.5V5.68l8-3.5Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="m4.65 9.65 8 3.5 8-3.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M4.65 14.35 12.65 17.83 20.65 14.35" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    case 'help-circle':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'gift':
      return (
        <svg {...common}>
          <rect x="3" y="8" width="18" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 8v13M3 12v7a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-7" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 8h5.5a2.5 2.5 0 1 0 0-5C15 3 12 8 12 8Zm0 0H6.5a2.5 2.5 0 1 1 0-5C9 3 12 8 12 8Z" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    case 'robot-arm':
      return (
        <svg {...common}>
          <path
            d="M5 19h6v2H5v-2ZM8 19V11"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M8 11c0-2 2-3.5 5-4.5s5-2 5-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="18" cy="2.5" r="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M11 9.5h3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    case 'text-stream':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
          <path
            d="M7 8h10M7 11.5h13M7 15h11M7 18.5h9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
  }
}

function TimelineLayout({ slide, styleClass, lang }) {
  const lg = L(slide, lang)
  const steps = Array.isArray(slide.timelineSteps) ? slide.timelineSteps : []

  return (
    <>
      <HeaderGlass slide={slide} styleClass={styleClass} lang={lang} />
      <div className={`slide-glass slide-glass--body ${styleClass}`}>
        <div className="slide-content__inner slide-content__inner--timeline">
          <ol className="slide-timeline" aria-label={t(slide.title, lg) || 'Workflow'}>
            {steps.map((step, i) => {
              const label = t(step.label, lg)
              const body = t(step.body, lg)
              const badge = step.badge != null ? t(step.badge, lg) : null
              const highlight = Boolean(step.highlight)
              return (
                <li
                  key={i}
                  className={[
                    'slide-timeline__step',
                    'animated',
                    highlight ? 'slide-timeline__step--hitl' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  <div className="slide-timeline__marker-col" aria-hidden="true">
                    <span className="slide-timeline__num">{i + 1}</span>
                    {i < steps.length - 1 && <span className="slide-timeline__connector" />}
                  </div>
                  <div className="slide-timeline__card">
                    <div className="slide-timeline__head">
                      {step.emoji ? (
                        <span className="slide-timeline__emoji" aria-hidden="true">
                          {step.emoji}
                        </span>
                      ) : null}
                      {label && (
                        <p className="slide-timeline__label">
                          <RichText>{label}</RichText>
                        </p>
                      )}
                      {badge && (
                        <span className="slide-timeline__badge">
                          <RichText>{badge}</RichText>
                        </span>
                      )}
                    </div>
                    {body && (
                      <p className="slide-timeline__body">
                        <RichText>{body}</RichText>
                      </p>
                    )}
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </>
  )
}

function IconGridLayout({ slide, styleClass, lang }) {
  const lg = L(slide, lang)
  const intro = slide.intro ? t(slide.intro, lg) : null
  const items = Array.isArray(slide.iconItems) ? slide.iconItems : []

  return (
    <>
      <HeaderGlass slide={slide} styleClass={styleClass} lang={lang} />
      <div className={`slide-glass slide-glass--body ${styleClass}`}>
        <div className="slide-content__inner slide-content__inner--icon-grid">
          {intro && (
            <p className="lead animated icon-grid__intro">
              <RichText>{intro}</RichText>
            </p>
          )}
          <ul className="icon-grid__list">
            {items.map((item, i) => (
              <li key={i} className="icon-grid__item animated">
                <div className="icon-grid__icon-wrap">
                  <DeckIcon name={item.icon} />
                </div>
                <div className="icon-grid__text">
                  <p className="icon-grid__label">
                    <RichText>{item.label}</RichText>
                  </p>
                  <p className="icon-grid__body">
                    <RichText>{item.body}</RichText>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

function TocLayout({ slide, styleClass, lang }) {
  const lg = L(slide, lang)
  const items = t(slide.tocItems, lg) ?? []

  return (
    <>
      <HeaderGlass slide={slide} styleClass={styleClass} lang={lang} />
      <div className={`slide-glass slide-glass--body ${styleClass}`}>
        <div className="slide-content__inner slide-content__inner--toc">
          <ol className="toc-list">
            {items?.map((line, i) => (
              <li key={i} className="toc-list__item animated">
                <RichText>{line}</RichText>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  )
}

function QuadPane({ quad, lang, brain }) {
  const title = quad?.title ? t(quad.title, lang) : null
  const body = quad?.body ? t(quad.body, lang) : null
  const badge = quad?.badge ? t(quad.badge, lang) : null

  return (
    <div className={`slide-glass slide-glass--col slide-glass--quad ${brain === 'left' ? 'slide-glass--quad-left' : 'slide-glass--quad-right'}`}>
      <div className="slide-content__inner slide-content__inner--quad">
        {title && (
          <h3 className="quad-title animated">
            <RichText>{title}</RichText>
          </h3>
        )}
        {body && (
          <p className="lead lead--quad animated">
            <RichText>{body}</RichText>
          </p>
        )}
        {badge && (
          <span className="quad-badge animated">
            <RichText>{badge}</RichText>
          </span>
        )}
      </div>
    </div>
  )
}

function FourQuadLayout({ slide, styleClass, lang }) {
  const q = slide.quads || {}
  const lg = L(slide, lang)

  return (
    <>
      <HeaderGlass slide={slide} styleClass={styleClass} lang={lang} />
      <div className="slide-four-quad">
        <div className="slide-four-quad__col">
          <QuadPane quad={q.topLeft} lang={lg} brain="left" />
          <QuadPane quad={q.bottomLeft} lang={lg} brain="left" />
        </div>
        <div className="slide-four-quad__col">
          <QuadPane quad={q.topRight} lang={lg} brain="right" />
          <QuadPane quad={q.bottomRight} lang={lg} brain="right" />
        </div>
      </div>
    </>
  )
}

/**
 * Image pane for image-text slides.
 */
function ImagePane({ src, alt }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className={`slide-image-pane slide-glass--col ${failed ? 'slide-image-pane--missing' : ''}`}>
      {failed ? (
        <div className="image-placeholder" aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          <span>{src.split('/').pop()}</span>
        </div>
      ) : (
        <img src={src} alt={alt} onError={() => setFailed(true)} />
      )}
    </div>
  )
}

// ─── Layout constants ──────────────────────────────────────────────────────

const FULL_CARD_LAYOUTS = ['title', 'quote']
const RAW_FILL_LAYOUTS  = ['vector-space']

// ─── Main component ────────────────────────────────────────────────────────

export function SlideFrame({ slide, isActive, lang }) {
  const layout = slide.layout || 'single'
  const styleClass = slide.style ? `slide-glass--${slide.style}` : ''
  const isFullCard = FULL_CARD_LAYOUTS.includes(layout)
  const isRawFill = RAW_FILL_LAYOUTS.includes(layout)

  return (
    <article
      className={`slide ${isActive ? 'is-active' : ''} ${slide.tone} ${layout === 'timeline' ? 'slide--timeline' : ''}`}
      aria-hidden={!isActive}
    >
      <motion.div
        className={`slide-shell ${isRawFill ? 'slide-shell--centered' : isFullCard ? 'slide-shell--centered' : 'slide-shell--stacked'} ${layout === 'timeline' ? 'slide-shell--timeline' : ''}`}
        initial={{ opacity: 0.5, scale: 0.98 }}
        animate={{ opacity: isActive ? 1 : 0.44, scale: isActive ? 1 : 0.98 }}
        transition={{ duration: 0.48, ease: 'easeOut' }}
      >
        {isFullCard && (
          <div className={`slide-glass slide-glass--full ${styleClass} slide-layout--${layout}`}>
            {layout === 'title' && <TitleContent slide={slide} lang={lang} />}
            {layout === 'quote' && <QuoteContent slide={slide} lang={lang} />}
          </div>
        )}

        {(layout === 'single' || layout === 'bullets-only') && (
          <>
            <HeaderGlass slide={slide} styleClass={styleClass} lang={lang} />
            {slide.blockquote != null ? (
              <SingleExtendedBody slide={slide} styleClass={styleClass} lang={lang} />
            ) : (
              <BodyGlass slide={slide} styleClass={styleClass} lang={lang} />
            )}
          </>
        )}

        {layout === 'two-col' && (
          <>
            <HeaderGlass slide={slide} styleClass={styleClass} lang={lang} />
            {t(slide.intro, L(slide, lang)) && (
              <div className={`slide-glass slide-glass--deck-intro ${styleClass}`}>
                <div className="slide-content__inner">
                  <p className="lead animated lead--deck-intro">
                    <RichText>{t(slide.intro, L(slide, lang))}</RichText>
                  </p>
                </div>
              </div>
            )}
            <div className="slide-two-pane">
              <div className={`slide-glass slide-glass--col ${styleClass}`}>
                <ColContent side={slide.left} lang={lang} />
              </div>
              <div className={`slide-glass slide-glass--col ${styleClass}`}>
                <ColContent side={slide.right} lang={lang} />
              </div>
            </div>
          </>
        )}

        {layout === 'two-col-split-right' && (
          <>
            <HeaderGlass slide={slide} styleClass={styleClass} lang={lang} />
            <div className="slide-two-pane slide-two-pane--split-right">
              <div className={`slide-glass slide-glass--col slide-glass--split-main ${styleClass}`}>
                <LeftSplitContent side={slide.left} lang={L(slide, lang)} />
              </div>
              <div className="slide-split-right-stack">
                <div className={`slide-glass slide-glass--col slide-glass--split-rt ${styleClass}`}>
                  <StatBlock stats={slide.rightTop?.stats} />
                </div>
                <div className={`slide-glass slide-glass--col slide-glass--split-rb ${styleClass}`}>
                  <ColContent side={slide.rightBottom} lang={L(slide, lang)} />
                </div>
              </div>
            </div>
          </>
        )}

        {layout === 'icon-grid' && <IconGridLayout slide={slide} styleClass={styleClass} lang={lang} />}

        {layout === 'timeline' && <TimelineLayout slide={slide} styleClass={styleClass} lang={lang} />}

        {layout === 'toc' && <TocLayout slide={slide} styleClass={styleClass} lang={lang} />}

        {layout === 'four-quad' && <FourQuadLayout slide={slide} styleClass={styleClass} lang={lang} />}

        {layout === 'vector-space' && (
          <div className={`slide-glass slide-glass--full ${styleClass || 'slide-glass--dark'} slide-layout--title slide-layout--vector-space`}>
            <VectorSpaceSlide slide={slide} lang={L(slide, lang)} isActive={isActive} />
          </div>
        )}

        {layout === 'image-text' && (
          <>
            <HeaderGlass slide={slide} styleClass={styleClass} lang={lang} />
            <div className="slide-two-pane">
              <ImagePane src={`/img/${slide.image}`} alt={t(slide.imageAlt, L(slide, lang)) || ''} />
              <div className={`slide-glass slide-glass--col ${styleClass}`}>
                <ColContent side={slide.right} lang={lang} />
              </div>
            </div>
          </>
        )}
      </motion.div>
    </article>
  )
}
