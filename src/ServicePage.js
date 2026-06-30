import { Link, useParams } from 'react-router-dom';
import { SERVICES } from './services';

function ServicePage() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <section className="service-detail">
        <div className="container">
          <h1>Služba nenalezena</h1>
          <p><Link to="/#services">Zpět na přehled služeb</Link></p>
        </div>
      </section>
    );
  }

  const otherServices = SERVICES.filter((s) => s.slug !== slug);

  return (
    <>
      <section className="service-detail">
        <div className="container">
          <div className="service-detail-header">
            <span className="service-icon-large">{service.icon}</span>
            <h1>{service.title}</h1>
          </div>
          <p>{service.intro}</p>
          <ul className="service-topics">
            {service.topics.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2>Další oblasti</h2>
          <div className="services-grid">
            {otherServices.map((s) => (
              <Link to={`/sluzby/${s.slug}`} className="service-card" key={s.slug}>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <span className="service-card-link">Zjistit více <span className="arrow">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Chcete se na něco zeptat?</h2>
          <Link to="/#contact" className="cta-button">Napište mi</Link>
        </div>
      </section>
    </>
  );
}

export default ServicePage;
