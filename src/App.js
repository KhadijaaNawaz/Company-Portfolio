import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Services from './pages/services/Services';
import Accounting from './pages/accounting/Accounting';
import Tax from './pages/tax/Tax';
import About from './pages/about/About';
import './App.css';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Accounting" element={<Accounting />} />
          <Route path="/Tax_Panning" element={<Tax />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
