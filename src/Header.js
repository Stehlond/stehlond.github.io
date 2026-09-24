import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from './Icon';
import { CONTACT } from './contact';

const NAV = [
  { name: 'Úvod', path: '/', hash: '' },
  { name: 'Oblasti praxe', path: '/', hash: '#oblasti-praxe' },
  { name: 'O mně', path: '/', hash: '#o-mne' },
  { name: 'Ceník', path: '/cenik', hash: '' },
  { name: 'Kontakt', path: '/kontakt', hash: '' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isActive = (item) =>
    item.path === location.pathname && (item.path !== '/' || location.hash === item.hash);

  return (
    <header className="site-header">
      <div className="container header-row">
        <Link to="/" className="logo" aria-label={`${CONTACT.name}, ${CONTACT.role} — úvod`}>
          <span className="logo-name">{CONTACT.name}</span>
          <span className="logo-role">{CONTACT.role}</span>
        </Link>

        <nav className="nav-desktop">
          {NAV.map((item) => (
            <Link
              key={item.name}
              to={`${item.path}${item.hash}`}
              className={`nav-link${isActive(item) ? ' active' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <a href={`tel:${CONTACT.telHref}`} className="header-phone">
            <Icon name="phone" />
            {CONTACT.tel}
          </a>
          <button
            type="button"
            className={`menu-toggle${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Zavřít menu' : 'Otevřít menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`nav-mobile${menuOpen ? ' open' : ''}`}>
        <nav className="container">
          {NAV.map((item) => (
            <Link
              key={item.name}
              to={`${item.path}${item.hash}`}
              className={isActive(item) ? 'active' : ''}
            >
              {item.name}
            </Link>
          ))}
          <a href={`tel:${CONTACT.telHref}`} className="nav-mobile-phone">
            <Icon name="phone" />
            {CONTACT.tel}
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
