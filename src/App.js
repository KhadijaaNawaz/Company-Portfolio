import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Services from './pages/services/Services';
import Accounting from './pages/accounting/Accounting';
import Tax from './pages/tax/Tax';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Products from './pages/products/Products';
import Erp from './pages/erp/Erp';
import Crm from './pages/crm/Crm';
import Industries from './pages/industries/Industries.js';
import Agribusiness from './pages/industries/agribusiness.js';
import './App.css';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/accounting" element={<Accounting />} />
          <Route path="/tax-planning" element={<Tax />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/erp" element={<Erp />} />
          <Route path="/crm" element={<Crm />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/agribusiness" element={<Agribusiness />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
