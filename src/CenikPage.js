import { Link } from 'react-router-dom';

const FEE_MODELS = [
  {
    icon: '⏱️',
    title: 'Hodinová sazba',
    text: '[Popis hodinové sazby — vhodné pro případy, kde nelze rozsah práce předem přesně odhadnout. Orientační sazba: [X] Kč/hod.]',
  },
  {
    icon: '📄',
    title: 'Pevná odměna',
    text: '[Popis pevné odměny za vyřízení konkrétního, dobře vymezeného úkonu nebo případu — částka dohodnutá předem.]',
  },
  {
    icon: '🔁',
    title: 'Paušál',
    text: '[Popis měsíčního paušálu pro klienty s opakovanou potřebou právních služeb, např. drobné podnikatele.]',
  },
];

function CenikPage() {
  return (
    <>
      <section className="service-detail">
        <div className="container">
          <h1>Ceník</h1>
          <p>
            Výši odměny se snažím s klienty domlouvat individuálně podle povahy a rozsahu
            konkrétního případu, a to ještě před zahájením spolupráce, aby pro vás byla
            cena vždy předem jasná a transparentní.
          </p>
        </div>
      </section>

      <section className="advantages">
        <div className="container">
          <div className="advantages-grid">
            {FEE_MODELS.map((f) => (
              <div className="advantage-card" key={f.title}>
                <div className="advantage-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-detail">
        <div className="container">
          <p>
            Pokud se s klientem na výši odměny nedohodneme předem, řídí se odměna
            vyhláškou Ministerstva spravedlnosti č. 177/1996 Sb., advokátním tarifem.
          </p>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Chcete nezávaznou nabídku?</h2>
          <Link to="/#contact" className="cta-button">Napište mi</Link>
        </div>
      </section>
    </>
  );
}

export default CenikPage;
