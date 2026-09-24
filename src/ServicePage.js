import { Link, useParams } from 'react-router-dom';
import Icon from './Icon';
import PracticeAreas from './PracticeAreas';
import CtaBand from './CtaBand';
import { SERVICES } from './services';

function ServicePage() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <section className="section section-tinted page-head">
        <div className="container">
          <h1 className="section-title">Služba nenalezena</h1>
          <span className="gold-rule" />
          <p className="body-text"><Link to="/#oblasti-praxe" className="text-link">Zpět na oblasti praxe</Link></p>
        </div>
      </section>
    );
  }

  const otherServices = SERVICES.filter((s) => s.slug !== slug);

  return (
    <>
      <section className="section section-tinted">
        <div className="container">
          <div className="section-head">
            <Icon name={service.icon} className="page-icon" strokeWidth={1.2} />
            <h1 className="section-title">{service.title}</h1>
            <span className="gold-rule" />
            <p className="page-intro">{service.intro}</p>
          </div>
          <ul className="topic-list">
            {service.topics.map((t) => (
              <li key={t}>
                <Icon name="check" className="icon-sm" strokeWidth={2} />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PracticeAreas services={otherServices} title="Další oblasti" id="dalsi-oblasti" />

      <CtaBand title="Chcete se na něco zeptat?" />
    </>
  );
}

export default ServicePage;
