import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
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
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
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
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;