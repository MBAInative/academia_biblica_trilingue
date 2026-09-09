import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Academy from '@/pages/Academy';
import Courses from '@/pages/Courses';
import Podcast from '@/pages/Podcast';
import BibleArt from '@/pages/BibleArt';
import Interviews from '@/pages/Interviews';
import Contact from '@/pages/Contact';
import LegalNotice from '@/pages/legal/LegalNotice';
import PrivacyPolicy from '@/pages/legal/PrivacyPolicy';
import CookiesPolicy from '@/pages/legal/CookiesPolicy';
import TermsOfUse from '@/pages/legal/TermsOfUse';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-stone-50">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/acerca-de-mi" element={<About />} />
            <Route path="/academia" element={<Academy />} />
            <Route path="/cursos" element={<Courses />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/biblia-arte" element={<BibleArt />} />
            <Route path="/entrevistas" element={<Interviews />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/aviso-legal" element={<LegalNotice />} />
            <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
            <Route path="/politica-cookies" element={<CookiesPolicy />} />
            <Route path="/condiciones-uso" element={<TermsOfUse />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;