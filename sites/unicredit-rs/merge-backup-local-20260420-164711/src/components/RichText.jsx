import { Fragment } from 'react'

/**
 * Splits on ***stressed***, **bold**, and ++highlight++ (non-greedy). Order matters for *** vs **.
 */
function splitRich(text) {
  if (typeof text !== 'string') return [{ type: 'text', content: String(text) }]
  const nodes = []
  const re = /(\*\*\*[\s\S]+?\*\*\*)|(\*\*[^*]+\*\*)|(\+\+[\s\S]+?\+\+)/g
  let last = 0
  let m
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) nodes.push({ type: 'text', content: text.slice(last, m.index) })
    if (m[1]) nodes.push({ type: 'stress', content: m[1].slice(3, -3) })
    else if (m[2]) nodes.push({ type: 'bold', content: m[2].slice(2, -2) })
    else if (m[3]) nodes.push({ type: 'plusplus', content: m[3].slice(2, -2) })
    last = m.index + m[0].length
  }
  if (last < text.length) nodes.push({ type: 'text', content: text.slice(last) })
  return nodes.length ? nodes : [{ type: 'text', content: text }]
}

export function RichText({ children, as: Tag = 'span', className }) {
  if (children == null) return null
  const segments = splitRich(children)
  return (
    <Tag className={className}>
      {segments.map((seg, i) => {
        if (seg.type === 'text') return <Fragment key={i}>{seg.content}</Fragment>
        if (seg.type === 'plusplus')
          return (
            <span key={i} className="rich-highlight">
              {seg.content}
            </span>
          )
        if (seg.type === 'stress')
          return (
            <span key={i} className="rich-stress">
              <strong>
                <em>{seg.content}</em>
              </strong>
            </span>
          )
        if (seg.type === 'bold')
          return (
            <strong key={i} className="rich-bold">
              {seg.content}
            </strong>
          )
        return null
      })}
    </Tag>
  )
}
