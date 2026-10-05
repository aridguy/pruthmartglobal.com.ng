import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import NotFound from './pages/NotFound';
import Aos from 'aos';
import Footer from './component/Footer';
import Scroll from './component/Scroll';

function App() {
  // animatioon innitialization
    useEffect(() => {
    Aos.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
      <Scroll />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
