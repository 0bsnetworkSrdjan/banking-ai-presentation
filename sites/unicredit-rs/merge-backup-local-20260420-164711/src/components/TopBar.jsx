import { t } from '../i18n'

export function TopBar({ activeSection, activeSlide, totalSlides, lang, langSelector }) {
  return (
    <header className="topbar">
      <div className="topbar__meta">
        {activeSection.chapter && <p>Chapter {activeSection.chapter}</p>}
        <p>{t(activeSection.section, lang)}</p>
      </div>
      <div className="topbar__right">
        <p className="topbar__count">
          {activeSlide + 1} / {totalSlides}
        </p>
        {langSelector}
      </div>
    </header>
  )
}
