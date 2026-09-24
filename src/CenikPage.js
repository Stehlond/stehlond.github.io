import Icon from './Icon';
import CtaBand from './CtaBand';

const FEE_MODELS = [
  {
    icon: 'clock',
    title: 'Hodinová sazba',
    highlight: '[X] Kč / hod.',
    text: '[Popis hodinové sazby — vhodné pro případy, kde nelze rozsah práce předem přesně odhadnout.]',
  },
  {
    icon: 'document',
    title: 'Pevná odměna',
    text: '[Popis pevné odměny za vyřízení konkrétního, dobře vymezeného úkonu nebo případu — částka dohodnutá předem.]',
  },
  {
    icon: 'repeat',
    title: 'Paušál',
    text: '[Popis měsíčního paušálu pro klienty s opakovanou potřebou právních služeb, např. drobné podnikatele.]',
  },
];

function CenikPage() {
  return (
    <>
      <section className="section section-tinted">
        <div className="container">
          <div className="section-head">
            <h1 className="section-title">Ceník</h1>
            <span className="gold-rule" />
            <p className="page-intro">
              Výši odměny se snažím s klienty domlouvat individuálně podle povahy a rozsahu
              konkrétního případu, a to ještě před zahájením spolupráce, aby pro vás byla
              cena vždy předem jasná a transparentní.
            </p>
          </div>

          <div className="fee-grid">
            {FEE_MODELS.map((f) => (
              <article className="fee-card" key={f.title}>
                <Icon name={f.icon} className="fee-icon" strokeWidth={1.2} />
                <h2>{f.title}</h2>
                {f.highlight && <p className="fee-highlight">{f.highlight}</p>}
                <p className="fee-text">{f.text}</p>
              </article>
            ))}
          </div>

          <p className="fee-note">
            Pokud se s klientem na výši odměny nedohodneme předem, řídí se odměna
            vyhláškou Ministerstva spravedlnosti č. 177/1996 Sb., advokátním tarifem.
          </p>
        </div>
      </section>

      <CtaBand title="Chcete nezávaznou nabídku?" />
    </>
  );
}

export default CenikPage;
