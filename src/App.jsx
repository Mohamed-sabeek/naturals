import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import HairAcademy from './pages/HairAcademy';
import SkinCareAcademy from './pages/SkinCareAcademy';
import MakeupAcademy from './pages/MakeupAcademy';
import NailArtAcademy from './pages/NailArtAcademy';
import MehndiAcademy from './pages/MehndiAcademy';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background overflow-x-hidden font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses/hair-academy" element={<HairAcademy />} />
            <Route path="/courses/skin-care-academy" element={<SkinCareAcademy />} />
            <Route path="/courses/makeup-academy" element={<MakeupAcademy />} />
            <Route path="/courses/nail-art-academy" element={<NailArtAcademy />} />
            <Route path="/courses/mehndi-academy" element={<MehndiAcademy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
