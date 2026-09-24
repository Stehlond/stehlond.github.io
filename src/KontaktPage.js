import Icon from './Icon';
import { CONTACT } from './contact';
import { SERVICES } from './services';

const DETAILS = [
  { icon: 'phone', label: 'Telefon', value: CONTACT.tel, href: `tel:${CONTACT.telHref}` },
  { icon: 'mail', label: 'E-mail', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: 'pin', label: 'Sídlo', value: `${CONTACT.street}\n${CONTACT.city}` },
  { icon: 'clock', label: 'Konzultační hodiny', value: CONTACT.hours },
];

function KontaktPage() {
  return (
    <section className="section section-tinted">
      <div className="container">
        <div className="section-head">
          <h1 className="section-title">Kontakt</h1>
          <span className="gold-rule" />
          <p className="page-intro">
            Popište mi stručně svou situaci. Ozvu se zpravidla do jednoho pracovního dne
            a navrhnu další postup.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <h2>{CONTACT.fullName}, {CONTACT.role}</h2>
            <span className="gold-rule gold-rule-sm" />
            <dl>
              {DETAILS.map((d) => (
                <div className="contact-detail" key={d.label}>
                  <Icon name={d.icon} />
                  <div>
                    <dt>{d.label}</dt>
                    <dd>{d.href ? <a href={d.href}>{d.value}</a> : d.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
            <p className="contact-meta">{CONTACT.ic} · {CONTACT.bar}</p>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <label className="form-label">
                Jméno a příjmení *
                <input name="jmeno" required autoComplete="name" />
              </label>
              <label className="form-label">
                Telefon
                <input name="telefon" type="tel" autoComplete="tel" />
              </label>
            </div>
            <div className="form-row">
              <label className="form-label">
                E-mail *
                <input name="email" type="email" required autoComplete="email" />
              </label>
              <label className="form-label">
                Oblast praxe
                <select name="oblast" defaultValue="">
                  <option value="">— vyberte —</option>
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.title}>{s.title}</option>
                  ))}
                  <option value="Jiné / nevím">Jiné / nevím</option>
                </select>
              </label>
            </div>
            <label className="form-label">
              Zpráva *
              <textarea name="zprava" rows="6" required placeholder="Stručně popište, s čím potřebujete pomoct…" />
            </label>
            <label className="form-consent">
              <input type="checkbox" name="souhlas" required />
              <span>Souhlasím se zpracováním osobních údajů za účelem vyřízení mého dotazu.</span>
            </label>
            <button type="submit" className="btn btn-primary btn-block">
              Odeslat poptávku <Icon name="arrow" className="icon-sm" />
            </button>
            <p className="form-note">* povinné údaje</p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default KontaktPage;
