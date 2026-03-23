const services = [
  {
    color: 'color-1',
    icon: 'icon-bulb',
    title: 'Architecture',
    desc: 'End to end communication and attention to details is the key to level the ground of a great product. Let\'s spend more time on the board so we don\'t lose the vision on the ground.',
  },
  {
    color: 'color-3',
    icon: 'icon-phone3',
    title: 'Application Development',
    desc: 'The core module of the business. It is important to build fast and apply the theory rather than waiting for hypothesis. This is the fast-paced domain of the business.',
  },
  {
    color: 'color-4',
    icon: 'icon-layers2',
    title: 'Design',
    desc: 'The key to a great application also lies in its aesthetics. A product is not complete until it appeals to the customer.',
  },
  {
    color: 'color-5',
    icon: 'icon-data',
    title: 'Product Management',
    desc: 'Choose the right mix of software tools and it will act as the greatest fuel in the product line and its development.',
  },
]

export default function Services() {
  return (
    <section className="colorlib-services" data-section="services" id="services">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box">
            <span className="heading-meta">What I do?</span>
            <h2 className="colorlib-heading">Here are some of my expertise</h2>
          </div>
        </div>
        <div className="row row-pt-md">
          {services.map(({ color, icon, title, desc }) => (
            <div key={title} className="col-md-4 col-sm-6 col-xs-12 text-center animate-box">
              <div className={`services ${color}`}>
                <span className="icon"><i className={icon}></i></span>
                <div className="desc">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
