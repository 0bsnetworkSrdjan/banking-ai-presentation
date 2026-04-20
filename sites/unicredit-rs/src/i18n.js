/**
 * Resolve a translatable field.
 *
 * A field can be:
 *   - a plain string or array  → returned as-is (same in all languages)
 *   - an object { en: …, de: … } → returns value for `lang`, falling back
 *     to English, then the first available translation
 *
 * Usage:
 *   t(slide.title, lang)         // string
 *   t(slide.bullets, lang)       // array
 *   t(slide.left?.body, lang)    // nested
 */
export function t(field, lang) {
  if (field == null) return field
  if (typeof field === 'string' || Array.isArray(field)) return field
  return field[lang] ?? field.en ?? Object.values(field)[0]
}

/**
 * Resolve a side object (left / right column) with all its fields translated.
 * Returns undefined if `side` is falsy.
 */
export function tSide(side, lang) {
  if (!side) return undefined
  return {
    kicker:   t(side.kicker,   lang),
    title:    t(side.title,    lang),
    subtitle: t(side.subtitle, lang),
    body:     t(side.body,     lang),
    bullets:  t(side.bullets,  lang),
  }
}
