import { t } from '../i18n'
import { RichText } from './RichText'

/**
 * Normalises `slide.bodyComparison` for the current language.
 *
 * Slide field shape:
 *   {
 *     leftHeading: string | i18n object,
 *     rightHeading: string | i18n object,
 *     rows: [{ left, right }, ...]
 *   }
 * Or wrapped for translation: `{ en: { leftHeading, rightHeading, rows }, … }`
 *
 * @param {object} slide
 * @param {string} lang
 * @returns {{ leftHeading: string, rightHeading: string, rows: { left: string, right: string }[] } | null}
 */
export function resolveBodyComparison(slide, lang) {
  const raw = slide?.bodyComparison
  if (!raw || typeof raw !== 'object') return null
  const c =
    'en' in raw && typeof raw.en === 'object' && raw.en !== null && Array.isArray(raw.en.rows)
      ? t(raw, lang)
      : raw
  if (!c || !Array.isArray(c.rows) || c.rows.length === 0) return null
  return {
    leftHeading: t(c.leftHeading, lang),
    rightHeading: t(c.rightHeading, lang),
    rows: c.rows.map((row) => ({
      left: t(row.left, lang),
      right: t(row.right, lang),
    })),
  }
}

/**
 * Side-by-side comparison table (two columns, header + rows).
 * Styling: `.body-comparison` in `index.css`.
 *
 * @param {object} props
 * @param {string} props.leftHeading
 * @param {string} props.rightHeading
 * @param {{ left: string, right: string }[]} props.rows
 * @param {string} [props.rowKeyPrefix='cmp'] — prefix for React keys
 * @param {string} [props.ariaLabel='Comparison']
 * @param {string} [props.className] — appended to the root class list
 */
export function SideBySideComparison({
  leftHeading,
  rightHeading,
  rows,
  rowKeyPrefix = 'cmp',
  ariaLabel = 'Comparison',
  className = '',
}) {
  if (!rows?.length) return null

  const rootClass = ['body-comparison', 'animated', className].filter(Boolean).join(' ')

  return (
    <div className={rootClass} role="region" aria-label={ariaLabel}>
      <div className="body-comparison__header">
        <div className="body-comparison__col body-comparison__col--left">
          <RichText>{leftHeading}</RichText>
        </div>
        <div className="body-comparison__col body-comparison__col--right">
          <RichText>{rightHeading}</RichText>
        </div>
      </div>
      <div className="body-comparison__rows">
        {rows.map((row, i) => (
          <div className="body-comparison__row" key={`${rowKeyPrefix}-${i}`}>
            <div className="body-comparison__cell body-comparison__cell--left">
              <RichText>{row.left}</RichText>
            </div>
            <div className="body-comparison__cell body-comparison__cell--right">
              <RichText>{row.right}</RichText>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
