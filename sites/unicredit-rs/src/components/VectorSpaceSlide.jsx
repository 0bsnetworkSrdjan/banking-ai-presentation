import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { t } from '../i18n'
import { RichText } from './RichText'

// ── Data ──────────────────────────────────────────────────────────────────────

const CLUSTERS = {
  products:   { label: 'Products',   color: '#4ade80', hex: 0x4ade80 },
  risk:       { label: 'Risk',       color: '#ff6b9d', hex: 0xff6b9d },
  operations: { label: 'Operations', color: '#00d4ff', hex: 0x00d4ff },
  markets:    { label: 'Markets',    color: '#c084fc', hex: 0xc084fc },
  strategy:   { label: 'Strategy',   color: '#fb923c', hex: 0xfb923c },
  misc:       { label: 'Misc',       color: '#778899', hex: 0x778899 },
}

const TERMS = [
  // Products
  { word: 'mortgage',     cluster: 'products',   pos: [-2.5,  1.5,  0.5], desc: 'Long-term loan secured against real property' },
  { word: 'loan',         cluster: 'products',   pos: [-3.0,  1.8, -0.3], desc: 'Sum of money lent at interest for a set term' },
  { word: 'deposit',      cluster: 'products',   pos: [-2.0,  0.6,  1.0], desc: 'Funds held at a bank on behalf of a customer' },
  { word: 'bond',         cluster: 'products',   pos: [-3.5,  0.9,  0.8], desc: 'Fixed-income debt instrument issued by entities' },
  { word: 'equity',       cluster: 'products',   pos: [-2.8,  0.3, -0.8], desc: 'Ownership stake in a company or asset' },
  { word: 'credit card',  cluster: 'products',   pos: [-2.1,  2.1, -0.3], desc: 'Revolving credit facility for consumer spending' },
  // Risk
  { word: 'default',      cluster: 'risk',       pos: [ 3.2,  0.5, -1.5], desc: 'Failure to meet debt repayment obligations' },
  { word: 'volatility',   cluster: 'risk',       pos: [ 2.8,  1.2, -1.0], desc: 'Statistical measure of price dispersion over time' },
  { word: 'liquidity',    cluster: 'risk',       pos: [ 3.5, -0.5, -0.8], desc: 'Ease of converting an asset to cash at fair value' },
  { word: 'collateral',   cluster: 'risk',       pos: [ 4.0,  0.8, -1.8], desc: 'Asset pledged as security against a loan' },
  { word: 'exposure',     cluster: 'risk',       pos: [ 2.5, -0.5, -2.0], desc: 'Maximum loss a position could suffer' },
  { word: 'hedge',        cluster: 'risk',       pos: [ 3.0,  0.0, -0.5], desc: 'Investment to reduce risk in another position' },
  { word: 'write-off',    cluster: 'risk',       pos: [ 3.8, -1.0, -1.2], desc: 'Formal recognition of an unrecoverable loss' },
  // Operations
  { word: 'settlement',   cluster: 'operations', pos: [ 0.5, -3.2,  2.0], desc: 'Transfer of securities or funds to complete a trade' },
  { word: 'compliance',   cluster: 'operations', pos: [-0.5, -2.8,  2.5], desc: 'Adherence to regulatory rules and standards' },
  { word: 'KYC',          cluster: 'operations', pos: [ 0.0, -3.5,  1.5], desc: 'Know Your Customer identity verification process' },
  { word: 'ledger',       cluster: 'operations', pos: [ 1.0, -2.5,  2.8], desc: 'Record of all financial transactions and balances' },
  { word: 'audit',        cluster: 'operations', pos: [-1.0, -3.0,  2.2], desc: 'Independent examination of financial statements' },
  { word: 'custody',      cluster: 'operations', pos: [ 0.5, -2.2,  3.0], desc: 'Safekeeping of financial assets on behalf of clients' },
  // Markets
  { word: 'yield',        cluster: 'markets',    pos: [ 1.2,  3.0, -2.0], desc: 'Income return on an investment expressed as a rate' },
  { word: 'spread',       cluster: 'markets',    pos: [ 0.5,  3.5, -1.5], desc: 'Difference between two rates, prices, or yields' },
  { word: 'derivative',   cluster: 'markets',    pos: [ 1.8,  2.8, -2.5], desc: 'Contract whose value derives from an underlying asset' },
  { word: 'futures',      cluster: 'markets',    pos: [ 0.8,  4.0, -2.0], desc: 'Obligation to buy or sell an asset at a future date' },
  { word: 'swap',         cluster: 'markets',    pos: [ 1.5,  3.2, -1.0], desc: 'Exchange of cash flows between two counterparties' },
  { word: 'option',       cluster: 'markets',    pos: [ 2.0,  3.5, -3.0], desc: 'Right, not obligation, to buy or sell at a set price' },
  { word: 'forex',        cluster: 'markets',    pos: [ 0.9,  2.5, -3.5], desc: 'Global market for trading currency pairs' },
  // Strategy
  { word: 'IPO',          cluster: 'strategy',   pos: [-1.5, -1.5, -3.2], desc: "First public sale of a company's shares" },
  { word: 'merger',       cluster: 'strategy',   pos: [-0.5, -0.8, -3.5], desc: 'Consolidation of two companies into one entity' },
  { word: 'leverage',     cluster: 'strategy',   pos: [-1.0, -1.2, -2.5], desc: 'Using borrowed capital to amplify potential returns' },
  { word: 'dividend',     cluster: 'strategy',   pos: [-2.0, -1.0, -3.0], desc: 'Distribution of profits to shareholders' },
  { word: 'capital',      cluster: 'strategy',   pos: [-0.8, -2.0, -3.8], desc: 'Financial resources available for investment' },
  { word: 'underwriting', cluster: 'strategy',   pos: [-2.5, -0.5, -2.8], desc: 'Guarantee to purchase unsold securities in an offering' },
  // Misc
  { word: 'amortization', cluster: 'misc', pos: [ 4.5,  2.5,  3.0], desc: 'Gradual repayment of a loan principal over time' },
  { word: 'escrow',       cluster: 'misc', pos: [-4.0, -2.0,  3.5], desc: 'Third-party holding of funds until conditions are met' },
  { word: 'fiduciary',    cluster: 'misc', pos: [ 3.8, -3.2, -0.5], desc: "Obligation to act in another party's best interest" },
  { word: 'tranche',      cluster: 'misc', pos: [-0.5,  4.5,  3.8], desc: 'A slice of a structured financial instrument' },
  { word: 'covenant',     cluster: 'misc', pos: [ 1.0, -4.5, -1.0], desc: "Contractual clause restricting a borrower's actions" },
  { word: 'prospectus',   cluster: 'misc', pos: [-3.8,  3.0,  1.5], desc: 'Formal document describing a securities offering' },
  { word: 'haircut',      cluster: 'misc', pos: [ 4.2, -1.5,  2.5], desc: "Reduction applied to collateral's market value" },
  { word: 'repo',         cluster: 'misc', pos: [-2.0,  4.2, -3.5], desc: 'Short-term borrowing against government securities' },
  { word: 'tenor',        cluster: 'misc', pos: [ 0.2,  1.5,  5.0], desc: 'Time remaining until a financial contract matures' },
  { word: 'basis point',  cluster: 'misc', pos: [-4.8,  0.5, -0.8], desc: 'One hundredth of one percentage point (0.01%)' },
  { word: 'nostro',       cluster: 'misc', pos: [ 2.5,  4.8,  0.5], desc: "Bank's account held at a foreign correspondent bank" },
  { word: 'vostro',       cluster: 'misc', pos: [-1.5, -4.8,  0.8], desc: 'Account a foreign bank holds at a domestic bank' },
  { word: 'LIBOR',        cluster: 'misc', pos: [ 5.0,  1.0, -3.0], desc: 'London Interbank Offered Rate; benchmark interest rate' },
  { word: 'SWIFT',        cluster: 'misc', pos: [-3.5, -0.5,  4.5], desc: 'Messaging network for international bank transfers' },
  { word: 'prime rate',   cluster: 'misc', pos: [ 1.5, -4.8,  3.5], desc: 'Interest rate banks charge their most creditworthy clients' },
  { word: 'float',        cluster: 'misc', pos: [-4.5,  2.8,  2.0], desc: 'Funds in transit between bank accounts' },
  { word: 'principal',    cluster: 'misc', pos: [ 3.5,  3.8,  2.5], desc: 'Original sum of money borrowed or invested' },
  { word: 'accrual',      cluster: 'misc', pos: [-0.8, -3.8, -4.5], desc: 'Recognition of revenue or expense before cash moves' },
  { word: 'drawdown',     cluster: 'misc', pos: [ 4.8, -2.5, -2.0], desc: 'Withdrawal of funds from a credit facility' },
  { word: 'netting',      cluster: 'misc', pos: [-3.0,  1.5,  4.8], desc: 'Offsetting of mutual obligations to reduce settlement' },
]

// ── Component ─────────────────────────────────────────────────────────────────

export function VectorSpaceSlide({ slide, lang, isActive }) {
  const containerRef = useRef(null)
  const labelsRef = useRef(null)
  const tooltipRef = useRef(null)
  const legendRef = useRef(null)
  const rafRef = useRef(null)
  const sceneRef = useRef(null)
  const [hasDismissedTitle, setHasDismissedTitle] = useState(false)
  const kicker = slide ? t(slide.kicker, lang) : null
  const title = slide ? t(slide.title, lang) : 'Banking Vector Space'
  const subtitle =
    slide ? t(slide.subtitle, lang) : 'How related financial concepts cluster in multidimensional space.'
  const visibleClusters = Object.keys(CLUSTERS).filter((key) => key !== 'misc').length
  const meta = `${TERMS.length} terms · 3 dimensions · ${visibleClusters} clusters`

  useEffect(() => {
    if (isActive) setHasDismissedTitle(false)
  }, [isActive])

  useEffect(() => {
    const container = containerRef.current
    const labelsDiv = labelsRef.current
    const tooltip = tooltipRef.current
    if (!container || !labelsDiv || !tooltip) return

    const W = () => container.clientWidth
    const H = () => container.clientHeight

    // ── Renderer — solid, matching the dark glass background colour
    // Using alpha:false + matching clear colour because WebGL alpha compositing
    // breaks inside a backdrop-filter stacking context (renders black).
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
    renderer.setSize(W(), H())
    renderer.setClearColor(0x0a1410, 1)   // dark teal-black — matches slide-glass--dark
    container.appendChild(renderer.domElement)
    renderer.domElement.style.position = 'absolute'
    renderer.domElement.style.inset = '0'

    // ── Scene
    const scene = new THREE.Scene()

    // ── Camera
    const camera = new THREE.PerspectiveCamera(55, W() / H(), 0.01, 500)
    camera.position.set(6, 3.5, 9)

    // ── Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.04
    controls.autoRotate = true
    controls.autoRotateSpeed = 0.35
    controls.minDistance = 2
    controls.maxDistance = 40
    controls.addEventListener('start', () => { controls.autoRotate = false })

    // ── Lights
    scene.add(new THREE.AmbientLight(0xb0c0e0, 1.0))
    const ptLight = new THREE.PointLight(0x6080ff, 2.5, 22)
    scene.add(ptLight)
    // Subtle fill light from below to reduce silhouette darkness
    const fillLight = new THREE.PointLight(0x40ffb0, 0.8, 18)
    fillLight.position.set(0, -6, 4)
    scene.add(fillLight)

    // ── Stars
    const starCount = 2400
    const starPos = new Float32Array(starCount * 3)
    for (let i = 0; i < starCount * 3; i++) starPos[i] = (Math.random() - 0.5) * 300
    const starGeo = new THREE.BufferGeometry()
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3))
    scene.add(new THREE.Points(starGeo, new THREE.PointsMaterial({
      color: 0xffffff, size: 0.06, transparent: true, opacity: 0.55,
    })))

    // ── Grid
    const grid = new THREE.GridHelper(20, 20, 0x0d1c38, 0x060e1e)
    grid.position.y = -5
    scene.add(grid)

    // ── Axes
    function addAxis(dir, col, len = 7) {
      const pts = [
        new THREE.Vector3(...dir.map(v => v * -len)),
        new THREE.Vector3(...dir.map(v => v * len)),
      ]
      const geo = new THREE.BufferGeometry().setFromPoints(pts)
      scene.add(new THREE.Line(geo, new THREE.LineBasicMaterial({ color: col, transparent: true, opacity: 0.18 })))
    }
    addAxis([1, 0, 0], 0xff2020)
    addAxis([0, 1, 0], 0x20ff40)
    addAxis([0, 0, 1], 0x2040ff)

    scene.add(Object.assign(new THREE.Mesh(
      new THREE.SphereGeometry(0.06, 12, 12),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 }),
    )))

    // ── Build term objects
    const termObjs = []
    const labelEls = []

    TERMS.forEach((term, i) => {
      const ci = CLUSTERS[term.cluster]
      const pos = new THREE.Vector3(...term.pos)
      const isMisc = term.cluster === 'misc'

      const geo = new THREE.SphereGeometry(isMisc ? 0.09 : 0.18, 16, 16)
      const mat = new THREE.MeshPhongMaterial({
        color: ci.hex, emissive: ci.hex,
        emissiveIntensity: isMisc ? 0.22 : 0.88,
        transparent: true, opacity: isMisc ? 0.55 : 1.0,
        shininess: isMisc ? 30 : 120,
      })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.position.copy(pos)
      mesh.userData.termIndex = i
      scene.add(mesh)

      const dir = pos.clone().normalize()
      const len = pos.length()
      const arrow = new THREE.ArrowHelper(dir, new THREE.Vector3(), len, ci.hex, 0.14, 0.07)
      arrow.line.material.transparent = true
      arrow.line.material.opacity = 0.58
      arrow.cone.material.transparent = true
      arrow.cone.material.opacity = 0.78
      if (isMisc) arrow.visible = false
      scene.add(arrow)

      const el = document.createElement('div')
      el.className = 'vs-term-label'
      el.textContent = term.word
      el.style.color = ci.color
      labelsDiv.appendChild(el)

      termObjs.push({ mesh, arrow, pos, term, ci })
      labelEls.push(el)
    })

    // ── Legend
    const legendDiv = legendRef.current
    const legendItems = {}
    Object.entries(CLUSTERS)
      .filter(([key]) => key !== 'misc')
      .forEach(([key, ci]) => {
        const el = document.createElement('div')
        el.className = 'vs-legend-item'
        el.innerHTML = `<div class="vs-legend-dot" style="background:${ci.color};box-shadow:0 0 7px ${ci.color}88"></div><span>${ci.label}</span>`
        el.addEventListener('click', () => isolateCluster(key))
        if (legendDiv) legendDiv.appendChild(el)
        legendItems[key] = el
      })

    // ── Connections
    let connectionLines = []
    let selectedCluster = null

    function clearConnections() {
      connectionLines.forEach(l => scene.remove(l))
      connectionLines = []
    }

    function drawConnectionsFor(clusterKey, opacity = 0.15) {
      const members = termObjs.filter(t => t.term.cluster === clusterKey)
      for (let i = 0; i < members.length; i++) {
        for (let j = i + 1; j < members.length; j++) {
          const geo = new THREE.BufferGeometry().setFromPoints([members[i].pos, members[j].pos])
          const mat = new THREE.LineBasicMaterial({ color: CLUSTERS[clusterKey].hex, transparent: true, opacity })
          const line = new THREE.Line(geo, mat)
          scene.add(line)
          connectionLines.push(line)
        }
      }
    }

    function applyClusterVisibility(key) {
      termObjs.forEach(t => {
        const same = t.term.cluster === key
        t.mesh.material.opacity = same ? 0.95 : 0.07
        t.arrow.line.material.opacity = same ? 0.7 : 0.04
        t.arrow.cone.material.opacity = same ? 0.85 : 0.04
      })
      labelEls.forEach((el, i) => {
        el.style.opacity = termObjs[i].term.cluster === key ? '0.9' : '0.06'
      })
    }

    function resetVisibility() {
      termObjs.forEach(t => {
        t.mesh.material.opacity = t.term.cluster === 'misc' ? 0.55 : 1.0
        t.arrow.line.material.opacity = 0.58
        t.arrow.cone.material.opacity = 0.78
      })
      labelEls.forEach(el => { el.style.opacity = '0.72' })
    }

    function isolateCluster(key) {
      if (selectedCluster === key) {
        selectedCluster = null
        clearConnections()
        resetVisibility()
        Object.values(legendItems).forEach(el => el.classList.remove('active'))
      } else {
        selectedCluster = key
        clearConnections()
        drawConnectionsFor(key, 0.18)
        applyClusterVisibility(key)
        Object.values(legendItems).forEach(el => el.classList.remove('active'))
        if (legendItems[key]) legendItems[key].classList.add('active')
      }
    }

    // ── Raycasting
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()
    let hoveredIdx = -1
    let nodeSize = 1

    function onMouseMove(e) {
      const rect = container.getBoundingClientRect()
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
    }

    function onClick() {
      if (hoveredIdx >= 0) isolateCluster(termObjs[hoveredIdx].term.cluster)
    }

    container.addEventListener('mousemove', onMouseMove)
    container.addEventListener('click', onClick)

    // ── Animate
    const tmpV = new THREE.Vector3()

    function animate() {
      rafRef.current = requestAnimationFrame(animate)
      controls.update()

      raycaster.setFromCamera(mouse, camera)
      const hits = raycaster.intersectObjects(termObjs.map(t => t.mesh))
      const newHov = hits.length ? hits[0].object.userData.termIndex : -1

      if (newHov !== hoveredIdx) {
        if (hoveredIdx >= 0) {
          termObjs[hoveredIdx].mesh.scale.setScalar(nodeSize)
          termObjs[hoveredIdx].mesh.material.emissiveIntensity = 0.45
          labelEls[hoveredIdx].classList.remove('hovered')
        }
        hoveredIdx = newHov
        if (hoveredIdx >= 0) {
          const t = termObjs[hoveredIdx]
          t.mesh.scale.setScalar(nodeSize * 1.9)
          t.mesh.material.emissiveIntensity = 1.1
          labelEls[hoveredIdx].classList.add('hovered')

          const ttWord = tooltip.querySelector('.vs-tt-word')
          const ttCluster = tooltip.querySelector('.vs-tt-cluster')
          const ttDesc = tooltip.querySelector('.vs-tt-desc')
          const ttCoords = tooltip.querySelector('.vs-tt-coords')
          if (ttWord) { ttWord.textContent = t.term.word; ttWord.style.color = t.ci.color }
          if (ttCluster) ttCluster.textContent = t.ci.label
          if (ttDesc) ttDesc.textContent = t.term.desc
          if (ttCoords) {
            const p = t.pos
            ttCoords.textContent = `[${p.x.toFixed(2)}, ${p.y.toFixed(2)}, ${p.z.toFixed(2)}]  |mag| ${p.length().toFixed(2)}`
          }
          tooltip.classList.add('visible')
        } else {
          tooltip.classList.remove('visible')
        }
      }

      const t0 = performance.now() * 0.001
      termObjs.forEach((t, i) => {
        if (i === hoveredIdx) return
        const pulse = 1 + Math.sin(t0 * 0.6 + i * 0.9) * 0.04
        t.mesh.scale.setScalar(nodeSize * pulse)
      })

      termObjs.forEach((t, i) => {
        tmpV.copy(t.pos).project(camera)
        if (tmpV.z > 1) { labelEls[i].style.opacity = '0'; return }
        const x = (tmpV.x * 0.5 + 0.5) * W()
        const y = (-tmpV.y * 0.5 + 0.5) * H()
        labelEls[i].style.left = x + 'px'
        labelEls[i].style.top = y + 'px'
        if (i !== hoveredIdx) {
          const op = selectedCluster ? (t.term.cluster === selectedCluster ? 0.85 : 0.06) : 0.72
          labelEls[i].style.opacity = String(op)
        } else {
          labelEls[i].style.opacity = '1'
        }
      })

      renderer.render(scene, camera)
    }

    animate()

    // ── Resize
    function onResize() {
      camera.aspect = W() / H()
      camera.updateProjectionMatrix()
      renderer.setSize(W(), H())
    }

    const ro = new ResizeObserver(onResize)
    ro.observe(container)

    // Fade hint
    const hintEl = container.querySelector('.vs-hint')
    const hintTimer = setTimeout(() => hintEl?.classList.add('fade'), 4500)

    sceneRef.current = { renderer, controls, ro, termObjs, labelEls, legendItems }

    return () => {
      clearTimeout(hintTimer)
      cancelAnimationFrame(rafRef.current)
      container.removeEventListener('mousemove', onMouseMove)
      container.removeEventListener('click', onClick)
      ro.disconnect()
      renderer.dispose()
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement)
      }
      // Clean up legend DOM
      if (legendDiv) legendDiv.innerHTML = ''
      // Clean up label DOM
      labelsDiv.innerHTML = ''
    }
  }, [])

  return (
    <div className="vs-slide">
      {/* Three.js mount point */}
      <div
        ref={containerRef}
        className={`vs-canvas-wrap ${hasDismissedTitle ? 'is-engaged' : ''}`}
        onPointerEnter={() => setHasDismissedTitle(true)}
        onPointerDown={() => setHasDismissedTitle(true)}
      >
        {/* Labels overlay */}
        <div ref={labelsRef} className="vs-labels" />

        {/* Title overlay */}
        <div className={`vs-title-overlay ${hasDismissedTitle ? 'is-hidden' : ''}`}>
          <div className="slide-content__inner slide-content__inner--title">
            {kicker && (
              <p className="kicker animated">
                <RichText>{kicker}</RichText>
              </p>
            )}
            {title && (
              <h1 className="animated">
                <RichText>{title}</RichText>
              </h1>
            )}
            {subtitle && (
              <p className="subtitle animated">
                <RichText>{subtitle}</RichText>
              </p>
            )}
            <p className="vs-title-meta animated">{meta}</p>
          </div>
        </div>

        {/* Hint */}
        <div className="vs-hint">drag to rotate &nbsp;·&nbsp; scroll to zoom &nbsp;·&nbsp; click to isolate cluster</div>

        {/* Axes key */}
        <div className="vs-axes">
          <div className="vs-axis-key"><span>X</span><div className="vs-axis-line" style={{ background: '#ff4040', opacity: 0.5 }} /></div>
          <div className="vs-axis-key"><span>Y</span><div className="vs-axis-line" style={{ background: '#40ff60', opacity: 0.5 }} /></div>
          <div className="vs-axis-key"><span>Z</span><div className="vs-axis-line" style={{ background: '#4060ff', opacity: 0.5 }} /></div>
        </div>

        {/* Tooltip */}
        <div ref={tooltipRef} className="vs-tooltip">
          <div className="vs-tt-word" />
          <div className="vs-tt-cluster" />
          <div className="vs-tt-desc" />
          <div className="vs-tt-coords" />
        </div>

        {/* Legend */}
        <div ref={legendRef} className="vs-legend" />
      </div>
    </div>
  )
}
