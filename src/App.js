import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import HomePage from './HomePage';
import ServicePage from './ServicePage';
import CenikPage from './CenikPage';

function App() {
  if (process.env.NODE_ENV === 'production') {
    return <div className="App" />;
  }

  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sluzby/:slug" element={<ServicePage />} />
          <Route path="/cenik" element={<CenikPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
