import { Link } from 'react-router-dom';
import { SERVICES } from './services';

const ADVANTAGES = [
  { icon: '🏅', title: 'Kvalita', text: '[Krátký popis důrazu na kvalitu a individuální přístup ke každému případu.]' },
  { icon: '⏱️', title: 'Rychlost', text: '[Krátký popis toho, jak rychle a bez zbytečných průtahů řešíte případy klientů.]' },
  { icon: '💶', title: 'Transparentní cena', text: '[Krátký popis modelu odměňování a transparentnosti cen bez skrytých poplatků.]' },
];

const REFERENCES = [
  { text: '[Placeholder reference klienta č. 1 — krátké shrnutí spokojenosti se spoluprací.]', author: '[Jméno klienta]' },
  { text: '[Placeholder reference klienta č. 2 — krátké shrnutí spokojenosti se spoluprací.]', author: '[Jméno klienta]' },
  { text: '[Placeholder reference klienta č. 3 — krátké shrnutí spokojenosti se spoluprací.]', author: '[Jméno klienta]' },
];

function HomePage() {
  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <h1>Advokát, kterému můžete věřit</h1>
          <p className="tagline">Váš úspěch a vaše spokojenost jsou pro mě osobní satisfakcí.</p>
          <a href="#contact" className="cta-button">Domluvit konzultaci</a>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container about-grid">
          <div className="photo-placeholder" aria-hidden="true">Foto</div>
          <div>
            <h2>O mně</h2>
            <p>
              Jsem advokát se zaměřením na obecnou právní pomoc fyzickým i právnickým
              osobám. Absolvoval jsem [Název univerzity] a praxi jsem sbíral
              v [advokátní kancelář / instituce].
            </p>
            <p>
              Zapsán u České advokátní komory pod ev. č. [00000]. Ke každému případu
              přistupuji individuálně a klademe důraz na rychlou a srozumitelnou komunikaci.
            </p>
            <p>
              [Doplňující odstavec o osobním přístupu, hodnotách nebo motivaci k práci
              advokáta — co klienta čeká při spolupráci a proč si vybrat právě vás.]
            </p>
          </div>
        </div>
      </section>

      <section className="advantages">
        <div className="container">
          <h2>Proč spolupracovat se mnou</h2>
          <div className="advantages-grid">
            {ADVANTAGES.map((a) => (
              <div className="advantage-card" key={a.title}>
                <div className="advantage-icon">{a.icon}</div>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <h2>Právní služby</h2>
          <div className="services-grid">
            {SERVICES.map((s) => (
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

      <section className="references">
        <div className="container">
          <h2>Reference</h2>
          <div className="references-grid">
            {REFERENCES.map((r, i) => (
              <div className="reference-card" key={i}>
                <div className="reference-stars">★★★★★</div>
                <p>
                  „{r.text}"
                  <span className="reference-author">{r.author}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container contact-grid">
          <div>
            <h2>Kontakt</h2>
            <p>📍 [Ulice a číslo popisné], [PSČ] [Město]</p>
            <p>📞 +420 000 000 000</p>
            <p>✉️ info@example.com</p>
          </div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Jméno" required />
            <input type="email" placeholder="E-mail" required />
            <textarea placeholder="Vaše zpráva" rows="4" required />
            <button type="submit">Odeslat</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default HomePage;
