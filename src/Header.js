import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="site-header">
      <div className="container nav-row">
        <Link to="/" className="logo">[Jméno Příjmení]</Link>
        <nav className="nav-links">
          <Link to="/">Úvod</Link>
          <Link to="/#about">O mně</Link>
          <Link to="/#services">Služby</Link>
          <Link to="/cenik">Ceník</Link>
          <Link to="/#contact">Kontakt</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
