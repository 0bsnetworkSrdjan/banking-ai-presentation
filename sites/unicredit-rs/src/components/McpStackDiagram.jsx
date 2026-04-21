import { useLayoutEffect, useRef, useState } from 'react'
import { t } from '../i18n'

/**
 * Vertical stack diagram for “Where MCP Sits in the Architecture”.
 * Highlights MCP Interface as the connective layer between agent and backends.
 */
export function McpStackDiagram({ stack, lang }) {
  const slotRef = useRef(null)
  const diagramRef = useRef(null)
  const [scale, setScale] = useState(1)

  useLayoutEffect(() => {
    const slot = slotRef.current
    const el = diagramRef.current
    if (!slot || !el) return

    const update = () => {
      const cw = slot.clientWidth
      const ch = slot.clientHeight
      const nw = el.offsetWidth
      const nh = el.offsetHeight
      if (cw < 2 || ch < 2 || nw < 2 || nh < 2) return
      setScale(Math.min(1, cw / nw, ch / nh))
    }

    update()
    const ro = new ResizeObserver(update)
    ro.observe(slot)
    ro.observe(el)
    return () => ro.disconnect()
  }, [stack])

  if (!stack) return null
  const agentLabel = t(stack.agentLabel, lang)
  const layerLabel = t(stack.layerLabel, lang)
  const layerCaption = t(stack.layerCaption, lang) ?? 'Connective layer'
  const serversTitle = t(stack.serversTitle, lang)
  const rawServers = Array.isArray(stack.servers) ? stack.servers : []
  const serverList = rawServers.map((item) => t(item, lang))

  const ariaLabel = [agentLabel, layerLabel, serversTitle].filter(Boolean).join(', ')

  return (
    <div ref={slotRef} className="body-diagram-slot">
      <div
        ref={diagramRef}
        className="mcp-stack-diagram"
        role="img"
        aria-label={ariaLabel}
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: `translate(-50%, -50%) scale(${scale})`,
          transformOrigin: 'center center',
        }}
      >
        <div className="mcp-stack-diagram__node mcp-stack-diagram__node--agent animated">
          {agentLabel}
        </div>
        <div className="mcp-stack-diagram__arrow animated" aria-hidden="true">
          <span className="mcp-stack-diagram__arrow-line" />
        </div>
        <div className="mcp-stack-diagram__layer-wrap animated">
          <div className="mcp-stack-diagram__layer">
            <span className="mcp-stack-diagram__layer-label">{layerLabel}</span>
            <span className="mcp-stack-diagram__layer-caption">{layerCaption}</span>
          </div>
        </div>
        <div className="mcp-stack-diagram__arrow animated" aria-hidden="true">
          <span className="mcp-stack-diagram__arrow-line" />
        </div>
        <div className="mcp-stack-diagram__servers animated">
          <p className="mcp-stack-diagram__servers-title">{serversTitle}</p>
          <ul className="mcp-stack-diagram__server-list">
            {serverList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
