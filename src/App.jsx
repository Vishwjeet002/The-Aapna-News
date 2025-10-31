import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Body from './component/body/body';

import English from './pages/English';
import Tamil from './pages/தமிழ்';
import Bengali from './pages/বাংলা';
import Malayalam from './pages/മലയാളം';
import Gujarati from './pages/ગુજરાતી';
import Hindi from './pages/हिंदी';
import Marathi from './pages/मराठी';
import Business from './pages/BUSINESS';
import Biznes from './pages/बिज़नेस';
import MainHeading from './component/MainHeading/MainHeading';

function App() {
  return (
    <Router>
       {/* Conditionally render Header and MainHeading only on Home page */}
       {location.pathname === '/' && (
        <>
          <Header />
          <MainHeading />
        </>
      )}
      <Routes>
        <Route path="/" element={<Body/>} />
        <Route path="/english" element={<English />} />
        <Route path="/tamil" element={<Tamil />} />
        <Route path="/bengali" element={<Bengali />} />
        <Route path="/malayalam" element={<Malayalam />} />
        <Route path="/gujarati" element={<Gujarati />} />
        <Route path="/hindi" element={<Hindi />} />
        <Route path="/marathi" element={<Marathi />} />
        <Route path="/business" element={<Business />} />
        <Route path="/biznes" element={<Biznes />} />
      </Routes>
    </Router>
  );
}

export default App;