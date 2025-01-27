import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './assets/screens/home';
import Products from './assets/screens/product';
import Services from './assets/screens/services';
import About from './assets/screens/about';
import Navigation from './assets/screens/navigations';
import "./App.css";



const App = () => {
  return (
    <div>
    <Router>
      <div>
        <Navigation /> {/* Navigation component for links */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
     

            </div>
  );
};

export default App;
