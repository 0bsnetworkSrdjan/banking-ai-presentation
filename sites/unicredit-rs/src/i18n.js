/**
 * Resolve a translatable field.
 *
 * A field can be:
 *   - a plain string / number / boolean → returned as-is
 *   - an object whose keys are all language codes (en, sr, …) → value for `lang`
 *   - a point-card bullet { heading, body } → each sub-field passed through `t`
 *   - an array → each item mapped with `t` (so arrays of { en, sr } resolve correctly)
 */
const LANG_KEYS = ['en', 'sr', 'de', 'it']

function isTranslationLeaf(obj) {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return false
  const keys = Object.keys(obj)
  return keys.length > 0 && keys.every((k) => LANG_KEYS.includes(k))
}

export function t(field, lang) {
  if (field == null) return field
  const T = typeof field
  if (T === 'string' || T === 'number' || T === 'boolean') return field
  if (Array.isArray(field)) {
    return field.map((item) => t(item, lang))
  }
  if (T === 'object') {
    if (isTranslationLeaf(field)) {
      return field[lang] ?? field.en ?? Object.values(field)[0]
    }
    if ('heading' in field || 'body' in field) {
      return {
        ...field,
        heading: field.heading != null ? t(field.heading, lang) : field.heading,
        body: field.body != null ? t(field.body, lang) : field.body,
      }
    }
    return field[lang] ?? field.en ?? Object.values(field)[0]
  }
  return field
}

/**
 * Resolve a side object (left / right column) with all its fields translated.
 * Returns undefined if `side` is falsy.
 */
export function tSide(side, lang) {
  if (!side) return undefined
  return {
    kicker: t(side.kicker, lang),
    title: t(side.title, lang),
    subtitle: t(side.subtitle, lang),
    body: t(side.body, lang),
    bullets: t(side.bullets, lang),
    icon: side.icon,
  }
}
