import { useInView } from 'react-intersection-observer'

const cards = [
  { color: 'color-3', icon: 'icon-data', label: 'Software' },
  { color: 'color-4', icon: 'icon-phone3', label: 'Application' },
  { color: 'color-1', icon: 'icon-bulb', label: 'Architect' },
  { color: 'color-2', icon: 'icon-globe-outline', label: 'Design' },
]

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="colorlib-about" data-section="about" id="about">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-12">
            <div ref={ref} className={`row row-bottom-padded-sm animate-box ${inView ? 'fadeInLeft' : ''}`}>
              <div className="col-md-12">
                <div className="about-desc">
                  <span className="heading-meta">About Me</span>
                  <h2 className="colorlib-heading">Who Am I?</h2>
                  <p>
                    <strong>Hi, I'm Snehashis Ghosh</strong> — a Software Engineer with 10+ years of experience
                    building scalable, high-impact user-facing web applications using React, TypeScript, and JavaScript (ES6+).
                  </p>
                  <p>
                    I am an expert in modern frontend architecture patterns, with a strong focus on web performance,
                    accessibility (WCAG), and frontend security. I have a proven track record of leading frontend
                    architecture, building reusable component libraries and design systems, and collaborating
                    cross-functionally with product, design, and engineering teams.
                  </p>
                  <p>
                    I have hands-on experience with authentication flows, session management, secure cookies, and
                    client-side security best practices. Recently, I have been working on OCR pipelines,
                    Retrieval-Augmented Generation (RAG) systems, and Python-based data analysis to enable
                    intelligent document processing and AI-assisted user experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {cards.map(({ color, icon, label }) => (
                <div key={label} className="col-md-3 col-sm-6 col-xs-6 animate-box">
                  <div className={`services ${color}`}>
                    <span className="icon2"><i className={icon}></i></span>
                    <h3>{label}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
