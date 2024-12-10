import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
