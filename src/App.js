import { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import ServicePage from './ServicePage';
import CenikPage from './CenikPage';
import KontaktPage from './KontaktPage';

// Scrolls to the #section in links like "/#o-mne", otherwise to the top on page change.
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    else window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function App() {
  // if (process.env.NODE_ENV === 'production') {
  //   return <div className="App" />;
  // }

  return (
    <HashRouter>
      <ScrollManager />
      <div className="App">
        <Header />
        <main className="site-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sluzby/:slug" element={<ServicePage />} />
            <Route path="/cenik" element={<CenikPage />} />
            <Route path="/kontakt" element={<KontaktPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
