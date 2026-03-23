import { useState } from 'react'

const experiences = [
  {
    color: 'color-3',
    title: 'Software Engineer Lead II',
    company: 'Nov 2024 – Present · UST (Client: T-Mobile)',
    effect: 'fadeInLeft',
    bullets: [
      'Leading platform-wide initiatives to modernize and scale T-Mobile\'s internal cloud provisioning and account management experiences, with a strong focus on frontend architecture, developer experience, and usability.',
      'Built and led frontend architecture for T-Cloud, T-Mobile\'s private cloud platform on OpenShift, enabling scalable, self-service containerized deployments and significantly improving developer productivity.',
      'Played a key role in building T-Mobile\'s next-generation Internal Developer Portal (IDP), a unified frontend control plane providing one-click access to infrastructure, services, CI/CD workflows, observability, and governance through golden-path automation, reducing developer time spent on repetitive infrastructure tasks by 20–40%, cutting onboarding time by 30–70%, and reducing service creation time from weeks to minutes.',
      'Led the integration and customization of Strapi CMS, replacing Adobe Experience Manager for document and blog management, streamlining content workflows and resulting in $100K+ annual savings in licensing and support costs.',
      'Designed and implemented an AI-powered document intelligence platform using OCR pipelines and Retrieval-Augmented Generation (RAG), enabling natural language querying and semantic search over enterprise documents, reducing document retrieval time by 85%, improving information accuracy by 40%, and increasing team productivity by 25%.',
      'Integrated Novu with T-Mobile\'s SMTP infrastructure to deliver real-time, multi-channel notifications for internal platforms, eliminating third-party email delivery services and saving $5K–$10K+ annually.',
    ],
  },
  {
    color: 'color-4',
    title: 'Consultant Software Engineer Lead',
    company: 'Nov 2023 – Nov 2024 · HPE',
    effect: 'fadeInRight',
    bullets: [
      'Led development of frontend-driven data visualization platforms for DevOps operations and service health, delivering interactive dashboards, heat maps, and visual analytics across thousands of datasets, improving operational data visibility by ~20%.',
      'Designed graph-based visualizations and service mapping systems to model service dependencies and backlog relationships, contributing to a ~3% reduction in operational backlogs and improving infrastructure service detection and observability by ~20%.',
      'Built alerting and visualization tools for IT Operations, enabling proactive detection of infrastructure and service issues and accelerating operational decision-making.',
    ],
  },
  {
    color: 'color-1',
    title: 'Staff Software Development Engineer',
    company: 'Jul 2019 – Oct 2023 · Fortinet Inc',
    effect: 'fadeInLeft',
    bullets: [
      'Led migration of legacy frontend systems to modern, scalable architectures, improving maintainability, performance, and long-term extensibility.',
      'Built security-focused web applications, dashboards, and network visualizations for global cyber-threat analysis, enabling proactive detection for enterprise customers.',
      'Improved proactive threat detection by ~15% through automation, reducing manual intervention by ~25%.',
    ],
  },
  {
    color: 'color-2',
    title: 'Software Engineer I – II',
    company: 'Aug 2015 – Aug 2019 · Equilar Inc',
    effect: 'fadeInRight',
    bullets: [
      'Built tools enabling executives and board members to signal board interest and supported a Predictive Diversity Network to identify prospective board candidates.',
      'Developed frontend platforms with network and relationship graphs connecting executives, law firms, and board members, surfacing multi-degree connections and supporting board discovery workflows.',
      'Created shared frontend tooling and design systems, including custom linting, code coverage tools, and reusable Node.js packages, reducing manual code review effort by ~20%.',
    ],
  },
  {
    color: 'color-5',
    title: 'Professional Intern',
    company: 'Jan 2014 – Aug 2014 · Walt Disney World',
    effect: 'fadeInLeft',
    text: 'Developed operations and logistics tracking software for Walt Disney merchandising division. Supported key leadership and management with supply chain operations, writing structured queries for aggregating data across different merchandising divisions.',
  },
]

function ChevronIcon({ open }) {
  return (
    <svg
      className="exp-chevron"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={{
        width: 13,
        height: 13,
        stroke: 'currentColor',
        strokeWidth: 2.5,
        fill: 'none',
        transition: 'transform 0.3s ease',
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
      }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

function ExpEntry({ exp }) {
  const [open, setOpen] = useState(false)

  return (
    <article className={`timeline-entry animate-box`} data-animate-effect={exp.effect}>
      <div className="timeline-entry-inner">
        <div className={`timeline-icon ${exp.color}`}>
          <i className="icon-pen2"></i>
        </div>
        <div className="timeline-label">
          <h2>
            <a href="#">{exp.title}</a>{' '}
            <span>{exp.company}</span>
          </h2>
          <div
            style={{
              overflow: 'hidden',
              maxHeight: open ? 2000 : 0,
              opacity: open ? 1 : 0,
              transition: 'max-height 0.4s ease, opacity 0.3s ease',
            }}
          >
            {exp.bullets ? (
              <ul>
                {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            ) : (
              <p>{exp.text}</p>
            )}
          </div>
          <button
            onClick={() => setOpen(o => !o)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 5,
              marginTop: 10,
              padding: '5px 14px',
              background: 'none',
              border: '1.5px solid #e0e0e0',
              borderRadius: 20,
              fontSize: 12,
              fontWeight: 600,
              color: '#a0a0a0',
              letterSpacing: '0.5px',
              cursor: 'pointer',
              transition: 'color 0.2s, border-color 0.2s, background 0.2s',
            }}
          >
            {open ? 'View less' : 'View more'}
            <ChevronIcon open={open} />
          </button>
        </div>
      </div>
    </article>
  )
}

export default function Experience() {
  return (
    <section className="colorlib-experience" data-section="experience" id="experience">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box">
            <span className="heading-meta">Experience</span>
            <h2 className="colorlib-heading animate-box">Work Experience</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="timeline-centered">
              {experiences.map((exp, i) => (
                <ExpEntry key={i} exp={exp} />
              ))}
              <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                <div className="timeline-entry-inner">
                  <div className="timeline-icon color-none"></div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
