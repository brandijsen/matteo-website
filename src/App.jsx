// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services'
import Service from './pages/Service/Service'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'

import './index.css'

const App = () => {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:id" element={<Service />} />

          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </Router>
  );
};

export default App;
