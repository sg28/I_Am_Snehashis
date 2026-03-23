import { useState } from 'react'

const NAV_ITEMS = ['about', 'services', 'skills', 'education', 'experience']

export default function Sidebar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggle = (e) => {
    e.preventDefault()
    const next = !menuOpen
    setMenuOpen(next)
    document.body.classList.toggle('offcanvas', next)
  }

  return (
    <>
      <a
        href="#"
        className={`js-colorlib-nav-toggle colorlib-nav-toggle ${menuOpen ? 'active' : ''}`}
        onClick={toggle}
      >
        <i></i>
      </a>
      <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
        <div className="text-center">
          <div className="author-img" style={{ backgroundImage: 'url(/images/snehashis.JPG)' }}></div>
          <h1 id="colorlib-logo"><a href="/">Snehashis Ghosh</a></h1>
          <span>svrddhig25@gmail.com</span>
          <span className="position"><a href="#">Built</a> in California</span>
        </div>
        <nav id="colorlib-main-menu" role="navigation" className="navbar">
          <div id="navbar" className={menuOpen ? '' : 'collapse'}>
            <ul>
              {NAV_ITEMS.map(section => (
                <li key={section} className={activeSection === section ? 'active' : ''}>
                  <a
                    href={`#${section}`}
                    onClick={() => { setMenuOpen(false); document.body.classList.remove('offcanvas') }}
                    style={{ textTransform: 'capitalize' }}
                  >
                    {section}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className="colorlib-footer">
          <ul>
            <li><a href="#"><i className="icon-facebook2"></i></a></li>
            <li><a href="#"><i className="icon-twitter2"></i></a></li>
            <li><a href="#"><i className="icon-instagram"></i></a></li>
            <li><a href="#"><i className="icon-linkedin2"></i></a></li>
          </ul>
        </div>
      </aside>
    </>
  )
}
