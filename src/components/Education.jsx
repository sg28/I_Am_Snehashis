import { useState } from 'react'

const degrees = [
  {
    id: 'ms',
    title: 'Master of Science — Computer Science',
    university: 'Texas A&M University',
    college: 'Frank H. Dotterweich College of Engineering',
    duration: 'Aug 2012 – Aug 2014',
    highlight: 'Graduate Research Scholarship Recipient',
    courses: ['Compiler Design', 'Database Systems', 'Operating Systems', 'Computer Communication Networks', 'Software Engineering'],
    project: 'Web scraping an online film/TV database and generating structured website content.',
  },
  {
    id: 'bs',
    title: 'Bachelor of Science — Computer Science',
    university: 'West Bengal University of Technology',
    duration: 'Aug 2008 – Jun 2012',
  },
]

function DegreePanel({ degree }) {
  const [open, setOpen] = useState(degree.id === 'ms')
  return (
    <div className="panel panel-default">
      <div className="panel-heading" role="tab">
        <h4 className="panel-title">
          <a
            href="#"
            onClick={e => { e.preventDefault(); setOpen(o => !o) }}
            aria-expanded={open}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            {degree.title}
            <span style={{ fontSize: 12, marginLeft: 8 }}>{open ? '▲' : '▼'}</span>
          </a>
        </h4>
      </div>
      {open && (
        <div className="panel-collapse">
          <div className="panel-body">
            <div className="row">
              <div className="col-md-6">
                <p><strong>{degree.university}</strong></p>
                {degree.college && <div>{degree.college}</div>}
                <div>{degree.duration}</div>
              </div>
              {degree.courses && (
                <div className="col-md-6">
                  <p style={{ color: '#a84cb8' }}>{degree.highlight}</p>
                  <p style={{ color: '#a84cb8' }}>Course Path</p>
                  {degree.courses.map(c => <div key={c}>{c}</div>)}
                  <p style={{ color: '#a84cb8', marginTop: 12 }}>Graduate Research Project</p>
                  <div>{degree.project}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Education() {
  return (
    <section className="colorlib-education" data-section="education" id="education">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box">
            <span className="heading-meta">Education</span>
            <h2 className="colorlib-heading animate-box">Education</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 animate-box">
            <div className="fancy-collapse-panel">
              <div className="panel-group">
                {degrees.map(d => <DegreePanel key={d.id} degree={d} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
