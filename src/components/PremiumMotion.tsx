'use client'

import { useEffect, useRef, useState } from 'react'
import { site, services } from '@/data/site'

export function Motion() {
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) return
    const nodes = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { threshold: .08 })
    nodes.forEach(node => { if (node.getBoundingClientRect().top > innerHeight) { node.classList.add('will-reveal'); observer.observe(node) } })
    let frame = 0
    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - innerHeight
      document.documentElement.style.setProperty('--reading', String(max > 0 ? scrollY / max : 0))
      document.documentElement.style.setProperty('--hero-shift', `${Math.min(scrollY * .15, 110)}px`)
    }
    const scroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    window.addEventListener('scroll', scroll, { passive: true }); update()
    return () => { observer.disconnect(); cancelAnimationFrame(frame); window.removeEventListener('scroll', scroll) }
  }, [])
  return <div className="reading-progress" aria-hidden="true" />
}

const vehicles = [
  { name: 'Auto', service: 'traino-auto', title: 'L’attenzione che la tua auto merita.', text: 'Guasto, avaria o auto non marciante: descrivi il problema e concordiamo il recupero e la destinazione.', image: '/images/services/traino-auto.jpg' },
  { name: 'Moto', service: 'carroattrezzi-moto', title: 'Due ruote. Un trasporto dedicato.', text: 'Moto e scooter richiedono punti di ancoraggio e fissaggi specifici. Comunica modello e condizioni del mezzo.', image: '/images/services/carroattrezzi-moto.jpg' },
  { name: 'Veicoli incidentati', service: 'recupero-auto-incidentata', title: 'Prima la sicurezza. Poi il recupero.', text: 'Indica eventuali danni, ruote bloccate e spazio disponibile. Valutiamo come movimentare il veicolo.', image: '/images/services/recupero-auto-incidentata.jpg' },
]
export function VehicleSelector() {
  const [selected, setSelected] = useState(0)
  const panel = vehicles[selected]
  const buttons = useRef<(HTMLButtonElement | null)[]>([])
  return <div className="vehicle-selector" data-reveal>
    <div className="vehicle-controls"><span className="eyebrow">Ogni mezzo ha il suo metodo</span><h2>Di cosa<br />hai bisogno?</h2>
      <div role="tablist" aria-label="Tipo di veicolo" className="vehicle-tabs">{vehicles.map((v, i) => <button ref={el => { buttons.current[i] = el }} key={v.name} id={`vehicle-tab-${i}`} role="tab" aria-selected={i === selected} aria-controls="vehicle-panel" tabIndex={i === selected ? 0 : -1} onClick={() => setSelected(i)} onKeyDown={event => {
        if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return
        event.preventDefault()
        const next = event.key === 'Home' ? 0 : event.key === 'End' ? 2 : (selected + (event.key === 'ArrowRight' ? 1 : 2)) % 3
        setSelected(next); buttons.current[next]?.focus()
      }}>{v.name}<span aria-hidden="true">↗</span></button>)}</div>
    </div>
    <div id="vehicle-panel" role="tabpanel" aria-labelledby={`vehicle-tab-${selected}`} tabIndex={0} className="vehicle-panel">
      <img key={panel.image} src={panel.image} width="1400" height="900" loading="lazy" alt={`Recupero ${panel.name.toLowerCase()}`} />
      <div className="vehicle-caption" key={panel.name}><h3>{panel.title}</h3><p>{panel.text}</p><a href={`/servizi/${panel.service}/`} className="text-link">Esplora il servizio <span aria-hidden="true">↗</span></a></div>
    </div>
  </div>
}
