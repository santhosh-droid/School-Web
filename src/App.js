import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Academics from './components/Academics';
import Admissions from './components/Admissions';
import Faculty from './components/Faculty';
import Students from './components/Students';
import Gallery from './components/Gallery';
import ContactUs from './components/Contactus';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Home></Home>} />
          <Route path="/about-us" element={<AboutUs></AboutUs>} />
          <Route path="/academics" element={<Academics></Academics>} />
          <Route path="/admissions" element={<Admissions></Admissions>} />
          <Route path="/faculty" element={<Faculty></Faculty>} />
          <Route path="/students" element={<Students></Students>} />
          <Route path="/gallery" element={<Gallery></Gallery>} />
          <Route path="/contact-us" element={<ContactUs></ContactUs>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
