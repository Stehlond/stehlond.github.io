import { Link } from 'react-router-dom';
import Icon from './Icon';
import PracticeAreas from './PracticeAreas';
import CtaBand from './CtaBand';
import { CONTACT } from './contact';

const ADVANTAGES = [
  { title: 'Kvalita', text: '[Krátký popis důrazu na kvalitu a individuální přístup ke každému případu.]' },
  { title: 'Rychlost', text: '[Krátký popis toho, jak rychle a bez zbytečných průtahů řešíte případy klientů.]' },
  { title: 'Transparentní cena', text: '[Krátký popis modelu odměňování a transparentnosti cen bez skrytých poplatků.]' },
];

const REFERENCES = [
  { text: '[Placeholder reference klienta č. 1 — krátké shrnutí spokojenosti se spoluprací.]', author: '[Jméno klienta]' },
  { text: '[Placeholder reference klienta č. 2 — krátké shrnutí spokojenosti se spoluprací.]', author: '[Jméno klienta]' },
  { text: '[Placeholder reference klienta č. 3 — krátké shrnutí spokojenosti se spoluprací.]', author: '[Jméno klienta]' },
];

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-text">
            <div className="hero-text-inner">
              <h1>
                {CONTACT.name},<br />
                {CONTACT.role}
              </h1>
              <span className="gold-rule gold-rule-lg" />
              <p className="hero-lead">
                Váš úspěch a vaše spokojenost jsou pro mě osobní satisfakcí.
                Individuální přístup a důraz na praktická řešení.
              </p>
              <div className="btn-row">
                <Link to="/kontakt" className="btn btn-primary">
                  Domluvit konzultaci <Icon name="arrow" className="icon-sm" />
                </Link>
                <Link to="/#oblasti-praxe" className="btn btn-gold">
                  Oblasti praxe <Icon name="arrow" className="icon-sm" />
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-image" aria-hidden="true">
            <Icon name="scales" className="hero-image-icon" strokeWidth={0.8} />
            <span>[Foto kanceláře / portrét]</span>
          </div>
        </div>
      </section>

      <PracticeAreas />

      <section id="o-mne" className="section section-tinted">
        <div className="container">
          <div className="about-grid">
            <div>
              <h2 className="section-title">O mně</h2>
              <span className="gold-rule" />
              <p className="body-text first">
                Jsem advokát se zaměřením na obecnou právní pomoc fyzickým i právnickým
                osobám. Absolvoval jsem [Název univerzity] a praxi jsem sbíral
                v [advokátní kancelář / instituce].
              </p>
              <p className="body-text">
                Zapsán u České advokátní komory pod ev. č. [00000]. Ke každému případu
                přistupuji individuálně a kladu důraz na rychlou a srozumitelnou komunikaci.
              </p>
              <p className="body-text">
                [Doplňující odstavec o osobním přístupu, hodnotách nebo motivaci k práci
                advokáta — co klienta čeká při spolupráci a proč si vybrat právě vás.]
              </p>
              <Link to="/kontakt" className="btn btn-gold btn-spaced">
                Domluvit konzultaci <Icon name="arrow" className="icon-sm" />
              </Link>
            </div>
            <div className="about-photo">
              <div className="photo-placeholder" aria-hidden="true">Foto</div>
            </div>
          </div>

          <div className="value-grid">
            {ADVANTAGES.map((a) => (
              <div className="value-box" key={a.title}>
                <p className="value-title">{a.title}</p>
                <span className="gold-rule gold-rule-sm" />
                <p className="value-text">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Reference</h2>
            <span className="gold-rule" />
          </div>
          <div className="references-grid">
            {REFERENCES.map((r, i) => (
              <figure className="reference-card" key={i}>
                <div className="reference-stars" aria-label="5 z 5 hvězdiček">★★★★★</div>
                <blockquote>„{r.text}“</blockquote>
                <figcaption>{r.author}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

export default HomePage;
