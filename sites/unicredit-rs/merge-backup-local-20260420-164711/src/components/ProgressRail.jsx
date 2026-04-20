export function ProgressRail({ slides, activeSlide, onSelect }) {
  return (
    <nav className="progress-rail" aria-label="Slide progress">
      {slides.map((slide, index) => {
        const label = slide.title ?? slide.quote ?? slide.kicker ?? `Slide ${index + 1}`
        return (
          <button
            key={index}
            type="button"
            className={`progress-dot ${index === activeSlide ? 'is-active' : ''}`}
            aria-label={`Go to slide ${index + 1}: ${label}`}
            onClick={() => onSelect(index)}
          />
        )
      })}
    </nav>
  )
}
