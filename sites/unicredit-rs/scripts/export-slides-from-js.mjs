/**
 * Regenerates `src/content/slides new.md` from `src/slides.js`.
 * Run from package root: node scripts/export-slides-from-js.mjs
 *
 * Output is deterministic and preserves all slide fields (including nested data)
 * via markdown-friendly sections + JSON blocks where needed for lossless round-trip.
 */

import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { slides, LANGUAGES, DEFAULT_LANG } from '../src/slides.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, '../src/content/slides new.md')

const PROTECTED_SLIDES = [
  {
    id: 'vS3bX7qN9k',
    reason: '3D scene (Three.js) — visual layout lives in VectorSpaceSlide.jsx + baked data',
  },
  {
    id: 'nN4kP8wR2x',
    reason: 'Embedded interactive canvas — content in public/neural-network.html',
  },
]

function escYamlString(s) {
  if (/[\n:#\[\]{}&*?|>'"%@`]/.test(s) || s.startsWith(' ') || s.endsWith(' ')) {
    return JSON.stringify(s)
  }
  return s
}

function fmLine(key, value) {
  if (value === undefined || value === null) return null
  if (key === 'chapter' && typeof value === 'string') {
    return `chapter: ${JSON.stringify(value)}`
  }
  if (typeof value === 'boolean') return `${key}: ${value}`
  if (typeof value === 'number') return `${key}: ${value}`
  if (typeof value === 'string') return `${key}: ${escYamlString(value)}`
  if (Array.isArray(value)) return `${key}: ${JSON.stringify(value)}`
  return `${key}: ${JSON.stringify(value)}`
}

function emitMeta() {
  const codes = LANGUAGES.map((l) => l.code).join(', ')
  return `---META---

# Global presentation configuration.

# Edit languages to control which languages are offered in the selector.

# The first entry in the list is the default language.

# When you ask the agent to "update slides", it translates all text fields

# into every language listed here. Content is always authored in English.

# NOTE: Serbian (sr) translations must always use Latin script, never Cyrillic.

languages: ${codes}
default: ${DEFAULT_LANG}
---META---
`
}

function emitAgentInstructions() {
  const lines = PROTECTED_SLIDES.map((p) => `  • ${p.id} — ${p.reason}`).join('\n')

  return `<!--
================================================================================
AGENT INSTRUCTIONS — READ BEFORE EDITING THIS FILE
================================================================================

SOURCE OF TRUTH
  This file was regenerated from src/slides.js (see scripts/export-slides-from-js.mjs).
  If you edit slide content here, mirror the same changes in slides.js (or re-run
  the export script after editing JS) so the app and this document stay aligned.

PROTECTED SLIDES — DO NOT EDIT TEXT/LAYOUT/FIELDS CASUALLY
  The following slides tie into interactive 3D or embedded HTML. Do not rewrite,
  translate, reformat, or "simplify" their blocks unless you are deliberately
  updating src/slides.js and the related implementation together:
${lines}

  For those ids: preserve wording, punctuation, and structure exactly unless you
  are performing a coordinated change in code + content.

BATCH MARKERS
  Slides are grouped into 5 batches (comments only) to make large edits safer.
================================================================================
-->
`
}

function splitSubtitleBlocks(subtitle) {
  if (!subtitle) return { lead: '', rest: '' }
  const parts = subtitle.split(/\n\n+/)
  if (parts.length <= 1) return { lead: subtitle, rest: '' }
  return { lead: parts[0], rest: parts.slice(1).join('\n\n') }
}

function emitTitleBody(slide) {
  const lines = []
  const tRaw = slide.title
  const sRaw = slide.subtitle
  const qv = slide.quoteVariants

  if (typeof tRaw === 'string' && typeof sRaw === 'string') {
    lines.push(`# ${tRaw}`)
    const { lead, rest } = splitSubtitleBlocks(sRaw)
    if (lead) lines.push(`## ${lead}`)
    if (rest) {
      lines.push('')
      lines.push('---')
      lines.push('')
      lines.push(rest.split('\n').join('\n'))
    }
    return lines.join('\n')
  }

  // Bilingual title slide: English block then [sr]
  const enTitle = tRaw?.en ?? tRaw
  const enSub = sRaw?.en ?? sRaw
  if (enTitle) lines.push(`# ${enTitle}`)
  if (enSub) lines.push(`## ${enSub}`)

  if (qv?.sr?.length) {
    lines.push('')
    lines.push('[sr]')
    lines.push('')
    lines.push(`# ${tRaw?.sr ?? enTitle}`)
    lines.push(`## ${sRaw?.sr ?? enSub}`)
    for (const line of qv.sr) {
      lines.push('')
      lines.push(`# ${line}`)
    }
  }

  return lines.join('\n')
}

function emitColumnBlock(tag, side) {
  if (!side) return ''
  const lines = [`[${tag}]`]
  if (side.kicker) lines.push(`kicker: ${escYamlString(side.kicker)}`)
  if (side.icon) lines.push(`icon: ${side.icon}`)
  if (side.title) lines.push(`# ${tPlain(side.title)}`)
  if (side.subtitle) lines.push(`## ${tPlain(side.subtitle)}`)
  if (side.body) {
    lines.push('')
    lines.push(typeof side.body === 'string' ? side.body : JSON.stringify(side.body))
  }
  if (side.sections?.length) {
    for (const sec of side.sections) {
      lines.push('')
      if (sec.heading) lines.push(`### ${tPlain(sec.heading)}`)
      if (sec.bullets?.length) {
        for (const b of sec.bullets) lines.push(`- ${b}`)
      }
      if (sec.body) lines.push(sec.body)
    }
  }
  if (side.link?.href) {
    lines.push('')
    lines.push(`[${side.link.label}](${side.link.href})`)
  }
  if (side.bullets?.length) {
    lines.push('')
    for (const b of side.bullets) lines.push(`- ${b}`)
  }
  if (side.bodyComparison) {
    lines.push('')
    lines.push('```bodyComparison')
    lines.push(JSON.stringify(side.bodyComparison, null, 2))
    lines.push('```')
  }
  if (side.body2 != null) {
    lines.push('')
    lines.push(typeof side.body2 === 'string' ? side.body2 : JSON.stringify(side.body2))
  }
  return lines.join('\n')
}

function tPlain(v) {
  if (typeof v === 'string') return v
  if (v && typeof v === 'object' && v.en) return v.en
  return String(v)
}

function emitIconGrid(slide) {
  const lines = []
  if (slide.intro) {
    lines.push(slide.intro)
    lines.push('')
  }
  for (const item of slide.iconItems ?? []) {
    lines.push(`- [${item.icon}]: **${item.label}** | ${item.body}`)
  }
  return lines.join('\n')
}

function emitToc(slide) {
  const items = slide.tocItems ?? []
  const startNum = slide.tocStart ?? 1
  const lines = []
  items.forEach((line, i) => {
    lines.push(`${startNum + i}. ${line}`)
  })
  return lines.join('\n')
}

function emitFourQuad(slide) {
  const q = slide.quads || {}
  const order = [
    ['top-left', q.topLeft],
    ['bottom-left', q.bottomLeft],
    ['top-right', q.topRight],
    ['bottom-right', q.bottomRight],
  ]
  const parts = []
  for (const [tag, quad] of order) {
    if (!quad) continue
    parts.push(`[${tag}]`)
    if (quad.title) parts.push(`# ${tPlain(quad.title)}`)
    parts.push('')
    if (quad.body) parts.push(tPlain(quad.body))
    if (quad.badge) {
      parts.push('')
      parts.push(`**[${tPlain(quad.badge)}]**`)
    }
    parts.push('')
  }
  return parts.join('\n').trim()
}

function emitBulletsOnly(slide) {
  const lines = []
  for (const b of slide.bullets ?? []) {
    lines.push(`- ${b}`)
  }
  return lines.join('\n')
}

function emitSingleLike(slide) {
  const lines = []
  // SingleExtendedBody (blockquote path): body → bullets → blockquote → body2 → body3
  if (slide.blockquote != null) {
    if (slide.body) lines.push(slide.body)
    if (slide.bullets?.length) {
      lines.push('')
      for (const b of slide.bullets) {
        if (typeof b === 'string') lines.push(`- ${b}`)
        else {
          lines.push('')
          lines.push(`- **${b.heading}**`)
          lines.push(`  ${b.body}`)
        }
      }
    }
    lines.push('')
    lines.push(`> ${slide.blockquote}`)
    if (slide.body2) {
      lines.push('')
      lines.push(slide.body2)
    }
    if (slide.body3) {
      lines.push('')
      lines.push(slide.body3)
    }
    return lines.join('\n')
  }

  // BodyGlass: body → bodyComparison → bodyDataTable → flowTimeline → mcpStack → body2 → body3 → bullets
  if (slide.body) lines.push(slide.body)
  if (slide.bodyComparison) {
    lines.push('')
    lines.push('```bodyComparison')
    lines.push(JSON.stringify(slide.bodyComparison, null, 2))
    lines.push('```')
  }
  if (slide.bodyDataTable) {
    lines.push('')
    lines.push('```bodyDataTable')
    lines.push(JSON.stringify(slide.bodyDataTable, null, 2))
    lines.push('```')
  }
  if (slide.flowTimeline) {
    lines.push('')
    lines.push('```flowTimeline')
    lines.push(JSON.stringify(slide.flowTimeline, null, 2))
    lines.push('```')
  }
  if (slide.mcpStack) {
    lines.push('')
    lines.push('```mcpStack')
    lines.push(JSON.stringify(slide.mcpStack, null, 2))
    lines.push('```')
  }
  if (slide.body2) {
    lines.push('')
    lines.push(slide.body2)
  }
  if (slide.body3) {
    lines.push('')
    lines.push(slide.body3)
  }
  if (slide.bullets?.length) {
    lines.push('')
    for (const b of slide.bullets) {
      if (typeof b === 'string') lines.push(`- ${b}`)
      else {
        lines.push('')
        lines.push(`- **${b.heading}**`)
        lines.push(`  ${b.body}`)
      }
    }
  }
  return lines.join('\n')
}

function emitVectorEmbed(slide) {
  const lines = []
  lines.push('<!-- Visual/interactive layer is implemented in code (VectorSpaceSlide.jsx or iframe src). -->')
  lines.push('<!-- Text above is duplicated in frontmatter for readability; keep in sync with slides.js. -->')
  if (slide.layout === 'embed') {
    lines.push('')
    lines.push(`Interactive: ${slide.embedSrc}`)
    lines.push(`iframe title: ${slide.embedTitle ?? ''}`)
  }
  return lines.join('\n')
}

function emitTimeline(slide) {
  return (
    '```timelineSteps\n' + JSON.stringify(slide.timelineSteps, null, 2) + '\n```'
  )
}

function emitTwoCol(slide) {
  const parts = []
  if (slide.intro) {
    parts.push(slide.intro)
    parts.push('')
  }
  parts.push(emitColumnBlock('left', slide.left))
  parts.push('')
  parts.push(emitColumnBlock('right', slide.right))
  return parts.filter(Boolean).join('\n\n')
}

function emitTwoColSplit(slide) {
  const parts = []
  parts.push(emitColumnBlock('left', slide.left))
  parts.push('')
  if (slide.rightTop?.stats) {
    parts.push('[right-top]')
    for (const st of slide.rightTop.stats) {
      parts.push(`- ${st.number} — ${st.label}`)
    }
  }
  parts.push('')
  parts.push('[right-bottom]')
  const rb = slide.rightBottom
  if (rb?.title) parts.push(`## ${rb.title}`)
  parts.push('')
  parts.push(rb?.body ?? '')
  return parts.join('\n')
}

const FRONTMATTER_ORDER = [
  'id',
  'layout',
  'section',
  'chapter',
  'kicker',
  'pre_title',
  'title',
  'subtitle',
  'tone',
  'style',
  'animation',
  'anim_duration',
  'anim_stagger',
  'no_translate',
  'hideSectionChip',
  'intro_variant',
  'twoColPaneClass',
  'twoColLowerLarge',
  'twoColRatio',
  'pointsGridClass',
  'bodyInnerClass',
  'bodyClass',
  'body2Class',
  'bodySurface',
  'tocStart',
  'tocSpacious',
  'tocLarge',
  'tocRevealSteps',
  'pointsCardModifier',
  'embedSrc',
  'embedTitle',
]

const CONTENT_KEYS = new Set([
  'left',
  'right',
  'rightTop',
  'rightBottom',
  'intro',
  'body',
  'body2',
  'body3',
  'bullets',
  'blockquote',
  'iconItems',
  'tocItems',
  'quads',
  'timelineSteps',
  'bodyComparison',
  'bodyDataTable',
  'flowTimeline',
  'mcpStack',
  'quoteVariants',
])

function emitFrontmatter(slide, layout) {
  const lines = []
  const titleSubtitleInBodyOnly = layout === 'title'

  for (const key of FRONTMATTER_ORDER) {
    if (!Object.prototype.hasOwnProperty.call(slide, key)) continue
    if (CONTENT_KEYS.has(key)) continue
    if (key === 'title' && titleSubtitleInBodyOnly) continue
    if (key === 'subtitle' && titleSubtitleInBodyOnly) continue
    const v = slide[key]
    if (key === 'title' || key === 'subtitle') {
      if (typeof v === 'object' && v !== null && !Array.isArray(v)) {
        lines.push(`${key}:`)
        for (const [lang, text] of Object.entries(v)) {
          lines.push(`  ${lang}: ${JSON.stringify(text)}`)
        }
        continue
      }
    }
    const line = fmLine(key, v)
    if (line) lines.push(line)
  }

  return lines.join('\n')
}

function emitSlideBody(slide, layout) {
  switch (layout) {
    case 'title':
      return emitTitleBody(slide)
    case 'two-col':
      return emitTwoCol(slide)
    case 'two-col-split-right':
      return emitTwoColSplit(slide)
    case 'icon-grid':
      return emitIconGrid(slide)
    case 'toc':
      return emitToc(slide)
    case 'four-quad':
      return emitFourQuad(slide)
    case 'bullets-only':
      return emitBulletsOnly(slide)
    case 'single':
      return emitSingleLike(slide)
    case 'vector-space':
    case 'embed':
      return emitVectorEmbed(slide)
    case 'timeline':
      return emitTimeline(slide)
    default:
      return emitSingleLike(slide)
  }
}

function slideDivider() {
  return '\n## ---SLIDE---\n\n'
}

function batchComment(n, total, label) {
  return `\n\n<!-- ═══ BATCH ${n} of ${total}: ${label} ═══ -->\n\n`
}

const BATCH_LABELS = [
  'Introduction + Module 1',
  'Module 2',
  'Modules 3–5',
  'Module 6–7',
  'Module 8 (tools, MCP, skills, timeline)',
]

function assignBatchIndex(i) {
  if (i < 11) return 0
  if (i < 22) return 1
  if (i < 33) return 2
  if (i < 44) return 3
  return 4
}

function buildDocument() {
  const chunks = [emitMeta(), emitAgentInstructions()]

  let prevBatch = -1
  slides.forEach((slide, i) => {
    const b = assignBatchIndex(i)
    if (b !== prevBatch) {
      chunks.push(batchComment(b + 1, BATCH_LABELS.length, BATCH_LABELS[b]))
      prevBatch = b
    }

    const layout = slide.layout || 'single'
    const fm = emitFrontmatter(slide, layout)
    const body = emitSlideBody(slide, layout)

    chunks.push(slideDivider())
    chunks.push(fm)
    chunks.push('\n\n')
    chunks.push(body)
    chunks.push('\n')
  })

  return chunks.join('').replace(/\n+$/, '\n')
}

writeFileSync(OUT, buildDocument(), 'utf8')
console.log(`Wrote ${OUT} (${slides.length} slides)`)
