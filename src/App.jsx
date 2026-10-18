/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import CelebrationCategories from './sections/CelebrationCategories';
import BridalPackages from './sections/BridalPackages';
import SacredMehndiJourney from './sections/SacredMehndiJourney';
import RecentCreations from './sections/RecentCreations';
import SignatureBridalStyles from './sections/SignatureBridalStyles';
import VikashPromise from './sections/VikashPromise';
import FromConeToCelebration from './sections/FromConeToCelebration';
import WordsFromOurBrides from './sections/WordsFromOurBrides';
import FinalCtaSection from './sections/FinalCtaSection';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [categoryFilter, setCategoryFilter] = useState('All Designs');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.startsWith('#gallery')) {
        setCurrentPage('gallery');
      } else if (hash.startsWith('#services')) {
        setCurrentPage('services');
      } else if (hash.startsWith('#about')) {
        setCurrentPage('about');
      } else if (hash.startsWith('#contact')) {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  // Page and anchor navigation coordinator
  const handleNavigate = useCallback((targetPage, category = 'All Designs') => {
    if (targetPage === 'gallery') {
      setCategoryFilter(category);
      setCurrentPage('gallery');
      window.history.pushState(null, '', '#gallery');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (targetPage === 'services') {
      setCurrentPage('services');
      window.history.pushState(null, '', '#services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (targetPage === 'about') {
      setCurrentPage('about');
      window.history.pushState(null, '', '#about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (targetPage === 'contact') {
      setCurrentPage('contact');
      window.history.pushState(null, '', '#contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentPage('home');
      window.history.pushState(null, '', '#home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#382326] font-sans antialiased selection:bg-[#E9D8B8] selection:text-[#3A1017]">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-1">
        {currentPage === 'gallery' ? (
          <GalleryPage 
            defaultCategory={categoryFilter}
            onNavigateHome={() => handleNavigate('home')} 
          />
        ) : currentPage === 'services' ? (
          <ServicesPage onNavigateHome={() => handleNavigate('home')} />
        ) : currentPage === 'about' ? (
          <AboutPage
            onNavigateHome={() => handleNavigate('home')}
            onBookConsultation={() => handleNavigate('contact')}
          />
        ) : currentPage === 'contact' ? (
          <ContactPage onNavigateHome={() => handleNavigate('home')} />
        ) : (
          <>
            <HeroSection />
            <CelebrationCategories onNavigateGallery={(cat) => handleNavigate('gallery', cat)} />
            <BridalPackages />
            <SacredMehndiJourney />
            <RecentCreations onNavigateGallery={() => handleNavigate('gallery')} />
            <SignatureBridalStyles />
            <VikashPromise />
            <FromConeToCelebration />
            <WordsFromOurBrides />
            <FinalCtaSection onNavigateContact={() => handleNavigate('contact')} />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
