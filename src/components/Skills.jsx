import { useInView } from 'react-intersection-observer'

const skills = [
  { name: 'React / TypeScript', pct: 95, color: 'color-1' },
  { name: 'JavaScript (ES6+)', pct: 95, color: 'color-1' },
  { name: 'HTML5 / CSS3 / Sass', pct: 95, color: 'color-4' },
  { name: 'Tailwind CSS / MUI / Bootstrap', pct: 90, color: 'color-4' },
  { name: 'Angular / AngularJS / Vue.js', pct: 80, color: 'color-1' },
  { name: 'React Native', pct: 80, color: 'color-1' },
  { name: 'D3.js / Three.js / Chart.js', pct: 75, color: 'color-3' },
  { name: 'Node.js / Express.js / GraphQL', pct: 75, color: 'color-3' },
  { name: 'Java / PHP / MySQL / MongoDB', pct: 70, color: 'color-1' },
  { name: 'Jest / Cypress / Playwright', pct: 80, color: 'color-3' },
  { name: 'Docker / Kubernetes / CI/CD', pct: 75, color: 'color-6' },
  { name: 'AWS / Azure', pct: 70, color: 'color-6' },
  { name: 'Git / GitHub / GitLab', pct: 90, color: 'color-6' },
  { name: 'WCAG / ARIA Accessibility', pct: 85, color: 'color-2' },
  { name: 'Python / OCR / RAG', pct: 70, color: 'color-2' },
  { name: 'Strapi CMS / Webpack / Babel', pct: 80, color: 'color-3' },
]

function SkillBar({ name, pct, color }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <div className="col-md-6 col-xs-12 animate-box" ref={ref}>
      <div className="progress-wrap">
        <h3>{name}</h3>
        <div className="progress">
          <div
            className={`progress-bar ${color}`}
            role="progressbar"
            aria-valuenow={pct}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: inView ? `${pct}%` : '0%', transition: 'width 1s ease' }}
          >
            <span>{pct}%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section className="colorlib-skills" data-section="skills" id="skills">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box">
            <span className="heading-meta">My Specialty</span>
            <h2 className="colorlib-heading animate-box">My Skills</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 animate-box">
            <p>10+ years of full-stack expertise with a primary focus on modern frontend architecture, performance, and developer experience.</p>
          </div>
          {skills.map(skill => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
