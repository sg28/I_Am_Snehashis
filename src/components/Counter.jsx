import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const counters = [
  { to: 309, label: 'Cups of coffee' },
  { to: 10, label: 'Years Experience' },
  { to: 5, label: 'Companies' },
  { to: 30, label: 'Projects Delivered' },
]

function CounterItem({ to, label, run }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!run) return
    const duration = 2000
    const steps = 60
    const increment = to / steps
    let current = 0
    const interval = setInterval(() => {
      current += increment
      if (current >= to) { setCount(to); clearInterval(interval) }
      else setCount(Math.floor(current))
    }, duration / steps)
    return () => clearInterval(interval)
  }, [run, to])

  return (
    <div className="col-md-3 col-sm-6 col-xs-6 text-center animate-box">
      <span className="colorlib-counter">{count}</span>
      <span className="colorlib-counter-label">{label}</span>
    </div>
  )
}

export default function Counter() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <div
      id="colorlib-counter"
      className="colorlib-counters"
      style={{ backgroundImage: 'url(/images/cover_bg_1.jpg)', backgroundAttachment: 'fixed', backgroundSize: 'cover' }}
      ref={ref}
    >
      <div className="overlay"></div>
      <div className="colorlib-narrow-content">
        <div className="row">
          {counters.map(({ to, label }) => (
            <CounterItem key={label} to={to} label={label} run={inView} />
          ))}
        </div>
      </div>
    </div>
  )
}
