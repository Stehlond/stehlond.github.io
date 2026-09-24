import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import { SERVICES } from './services';

// Tiles open on mouse hover; on touch/keyboard they toggle on tap/Enter.
function PracticeAreas({ services = SERVICES, title = 'Oblasti praxe', id = 'oblasti-praxe' }) {
  const [open, setOpen] = useState(null);
  const lastPointer = useRef(null);

  return (
    <section id={id} className="section">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">{title}</h2>
          <span className="gold-rule" />
        </div>
        <div className="practice-grid">
          {services.map((s, i) => {
            const isOpen = open === i;
            return (
              <div
                key={s.slug}
                className={`practice-tile${isOpen ? ' open' : ''}`}
                onPointerEnter={(e) => e.pointerType === 'mouse' && setOpen(i)}
                onPointerLeave={(e) => e.pointerType === 'mouse' && setOpen(null)}
              >
                <button
                  type="button"
                  className="practice-tile-head"
                  aria-expanded={isOpen}
                  onPointerDown={(e) => { lastPointer.current = e.pointerType; }}
                  onClick={() => {
                    if (lastPointer.current === 'mouse') setOpen(i);
                    else setOpen(isOpen ? null : i);
                    lastPointer.current = null;
                  }}
                >
                  <Icon name={s.icon} className="practice-icon" />
                  <span className="practice-title">{s.title}</span>
                  <Icon name="arrow" className="practice-arrow" />
                </button>
                <div className="practice-body">
                  <div>
                    <p>{s.text}</p>
                    <Link to={`/sluzby/${s.slug}`} className="practice-link" tabIndex={isOpen ? 0 : -1}>
                      Zjistit více <Icon name="arrow" className="icon-sm" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PracticeAreas;
