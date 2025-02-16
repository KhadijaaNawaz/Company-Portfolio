import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer.js';
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
import ManagedITServices from "./pages/services/ManagedITServices";
import ITInfrastructureOptimization from "./pages/services/ITInfrastructureOptimization";
import CybersecurityServices from "./pages/services/CybersecurityServices.js";
import CloudComputing from "./pages/services/CloudComputing";
import ITConsulting from "./pages/services/ITConsulting";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import HelpDeskSupport from "./pages/services/HelpDeskSupport";
import DataServices from "./pages/services/DataServices";
import InternetEmail from "./pages/services/InternetEmail";
import IoTSolutions from "./pages/services/IoTSolutions";
import ITOutsourcing from "./pages/services/ITOutsourcing";
import DigitalMarketing from "./pages/services/DigitalMarketing";
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
          <Route path="/services/managed-it-services" element={<ManagedITServices />} />
          <Route path="/services/it-infrastructure-optimization" element={<ITInfrastructureOptimization />} />
          <Route path="/services/cybersecurity-services" element={<CybersecurityServices />} />
          <Route path="/services/cloud-computing" element={<CloudComputing />} />
          <Route path="/services/it-consulting" element={<ITConsulting />} />
          <Route path="/services/software-development" element={<SoftwareDevelopment />} />
          <Route path="/services/help-desk-support" element={<HelpDeskSupport />} />
          <Route path="/services/data-services" element={<DataServices />} />
          <Route path="/services/internet-email" element={<InternetEmail />} />
          <Route path="/services/iot-solutions" element={<IoTSolutions />} />
          <Route path="/services/it-outsourcing" element={<ITOutsourcing />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
