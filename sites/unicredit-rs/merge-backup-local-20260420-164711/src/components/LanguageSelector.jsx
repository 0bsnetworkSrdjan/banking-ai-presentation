export function LanguageSelector({ languages, currentLang, onSelect }) {
  if (!languages || languages.length <= 1) return null
  return (
    <div className="lang-selector" role="group" aria-label="Language">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          className={`lang-btn ${code === currentLang ? 'is-active' : ''}`}
          aria-pressed={code === currentLang}
          onClick={() => onSelect(code)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
