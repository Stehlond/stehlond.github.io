import { Link } from 'react-router-dom';
import Icon from './Icon';

function CtaBand({ title = 'Řešíte právní otázku?', text = 'Napište mi — rád se na vaši situaci podívám.' }) {
  return (
    <section className="cta-band">
      <div className="container cta-band-row">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Link to="/kontakt" className="btn btn-gold btn-on-dark">
          Přejít na kontakt <Icon name="arrow" className="icon-sm" />
        </Link>
      </div>
    </section>
  );
}

export default CtaBand;
