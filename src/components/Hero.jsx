import { useState, useEffect } from 'react'

const slides = [
  { bg: '/images/img_bg_1.jpg', title: "Hi!", subtitle: "I'm Snehashis" },
  { bg: '/images/img_bg_2.jpg', title: 'I am', subtitle: 'a Software Developer' },
]

export default function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(i => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="colorlib-hero" className="js-fullheight" data-section="home">
      <div className="flexslider js-fullheight" style={{ position: 'relative', overflow: 'hidden' }}>
        {slides.map((slide, i) => (
          <div
            key={i}
            className="slider-item js-fullheight"
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${slide.bg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: active === i ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
            }}
          >
            <div className="overlay"></div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                  <div className="slider-text-inner js-fullheight">
                    <div className="desc">
                      <h1>
                        <span>{slide.title}</span><br />
                        <span>{slide.subtitle}</span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
