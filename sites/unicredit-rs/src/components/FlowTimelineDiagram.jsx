import { useLayoutEffect, useRef, useState } from 'react'

/**
 * Flow timeline for “The Full Picture” — agent orchestration steps and tool palette.
 * `timeline.layout === 'horizontal'` renders left-to-right (fits the slide width better).
 * `timeline.rows` — optional array of step rows; each row is a horizontal strip (split flow for readability).
 */
function Connector({ horizontal }) {
  return (
    <div
      className={['flow-timeline__arrow', horizontal && 'flow-timeline__arrow--horizontal']
        .filter(Boolean)
        .join(' ')}
      aria-hidden="true"
    >
      <span
        className={['flow-timeline__arrow-line', horizontal && 'flow-timeline__arrow-line--horizontal']
          .filter(Boolean)
          .join(' ')}
      />
    </div>
  )
}

function TextNode({ label }) {
  return (
    <div className="flow-timeline__node flow-timeline__node--text animated">
      {label}
    </div>
  )
}

function AgentNode({ label }) {
  return (
    <div className="flow-timeline__node flow-timeline__node--agent animated">{label}</div>
  )
}

function ReviewNode({ label }) {
  return (
    <div className="flow-timeline__node flow-timeline__node--review animated">{label}</div>
  )
}

function ToolsCard({ title, items }) {
  const list = Array.isArray(items) ? items : []
  return (
    <div className="flow-timeline__tools animated">
      <p className="flow-timeline__tools-title">{title}</p>
      <ul className="flow-timeline__tools-list">
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function renderStep(step, stepKey) {
  switch (step.kind) {
    case 'text':
      return <TextNode key={stepKey} label={step.label} />
    case 'agent':
      return <AgentNode key={stepKey} label={step.label} />
    case 'review':
      return <ReviewNode key={stepKey} label={step.label} />
    case 'tools':
      return <ToolsCard key={stepKey} title={step.title} items={step.items} />
    default:
      return null
  }
}

function buildHorizontalParts(steps, rowKey) {
  const parts = []
  steps.forEach((step, i) => {
    if (i > 0) parts.push(<Connector key={`${rowKey}-c-${i}`} horizontal />)
    const el = renderStep(step, `${rowKey}-s-${i}`)
    if (el) parts.push(el)
  })
  return parts
}

export function FlowTimelineDiagram({ timeline }) {
  const slotRef = useRef(null)
  const flowRef = useRef(null)
  const [scale, setScale] = useState(1)

  useLayoutEffect(() => {
    const slot = slotRef.current
    const flow = flowRef.current
    if (!slot || !flow) return

    const update = () => {
      const cw = slot.clientWidth
      const ch = slot.clientHeight
      const nw = flow.offsetWidth
      const nh = flow.offsetHeight
      if (cw < 2 || ch < 2 || nw < 2 || nh < 2) return
      setScale(Math.min(1, cw / nw, ch / nh))
    }

    update()
    const ro = new ResizeObserver(update)
    ro.observe(slot)
    ro.observe(flow)
    return () => ro.disconnect()
  }, [timeline])

  if (!timeline) return null
  const rows = Array.isArray(timeline.rows) && timeline.rows.length > 0 ? timeline.rows : null
  const steps = timeline.steps
  if (!rows && !steps?.length) return null
  const horizontal = timeline.layout === 'horizontal'

  const flowInner = rows ? (
    <div className="flow-timeline flow-timeline--rows" role="img" aria-label="Flow from user request to response">
      {rows.map((rowSteps, ri) => (
        <div key={`row-${ri}`} className="flow-timeline__row-wrap">
          {ri > 0 ? (
            <div className="flow-timeline__inter-row" aria-hidden="true">
              <Connector horizontal={false} />
            </div>
          ) : null}
          <div className="flow-timeline flow-timeline--horizontal flow-timeline__row-track">
            {buildHorizontalParts(rowSteps, `r${ri}`)}
          </div>
        </div>
      ))}
    </div>
  ) : horizontal ? (
    <div
      className="flow-timeline flow-timeline--horizontal"
      role="img"
      aria-label="Flow from user request to response"
    >
      {buildHorizontalParts(steps, 'single')}
    </div>
  ) : (
    <div className="flow-timeline" role="img" aria-label="Flow from user request to response">
      {steps.reduce((acc, step, i) => {
        if (i > 0) acc.push(<Connector key={`c-${i}`} horizontal={false} />)
        acc.push(renderStep(step, `v-${i}`))
        return acc
      }, [])}
    </div>
  )

  return (
    <div ref={slotRef} className="body-diagram-slot">
      <div
        ref={flowRef}
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: `translate(-50%, -50%) scale(${scale})`,
          transformOrigin: 'center center',
        }}
      >
        {flowInner}
      </div>
    </div>
  )
}
