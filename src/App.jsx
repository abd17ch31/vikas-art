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
  // Determine initial page from URL hash or path
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.toLowerCase();
    const path = window.location.pathname.toLowerCase();
    if (hash === '#gallery' || hash === '#/gallery' || path === '/gallery') {
      return 'gallery';
    }
    if (hash === '#services' || hash === '#/services' || path === '/services') {
      return 'services';
    }
    if (hash === '#about' || hash === '#/about' || hash === '#about-page' || path === '/about') {
      return 'about';
    }
    if (hash === '#contact' || hash === '#/contact' || hash === '#contact-page' || path === '/contact') {
      return 'contact';
    }
    return 'home';
  });

  // Keep state in sync with browser forward/back buttons & hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#gallery' || hash === '#/gallery') {
        setCurrentPage('gallery');
      } else if (hash === '#services' || hash === '#/services') {
        setCurrentPage('services');
      } else if (hash === '#about' || hash === '#/about' || hash === '#about-page') {
        setCurrentPage('about');
      } else if (hash === '#contact' || hash === '#/contact' || hash === '#contact-page') {
        setCurrentPage('contact');
      } else if (hash === '#home' || hash === '' || hash.startsWith('#')) {
        // If it's a section on home page
        if (
          currentPage !== 'home' &&
          hash !== '#gallery' &&
          hash !== '#/gallery' &&
          hash !== '#services' &&
          hash !== '#/services' &&
          hash !== '#about' &&
          hash !== '#/about' &&
          hash !== '#about-page' &&
          hash !== '#contact' &&
          hash !== '#/contact' &&
          hash !== '#contact-page'
        ) {
          setCurrentPage('home');
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, [currentPage]);

  // Page and anchor navigation coordinator
  const handleNavigate = useCallback((targetPage, hashTarget) => {
    if (targetPage === 'gallery') {
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
      if (hashTarget) {
        window.history.pushState(null, '', hashTarget);
        // Allow DOM to render home before scrolling
        setTimeout(() => {
          const el = document.querySelector(hashTarget);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 60);
      } else {
        window.history.pushState(null, '', '#home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#382326] font-sans antialiased selection:bg-[#E9D8B8] selection:text-[#3A1017]">
      {/* Global Navbar (No cart here - cart is exclusive to the Gallery page toolbar) */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-1">
        {currentPage === 'gallery' ? (
          <GalleryPage onNavigateHome={() => handleNavigate('home', '#home')} />
        ) : currentPage === 'services' ? (
          <ServicesPage onNavigateHome={() => handleNavigate('home', '#home')} />
        ) : currentPage === 'about' ? (
          <AboutPage
            onNavigateHome={() => handleNavigate('home', '#home')}
            onBookConsultation={() => handleNavigate('contact')}
          />
        ) : currentPage === 'contact' ? (
          <ContactPage onNavigateHome={() => handleNavigate('home', '#home')} />
        ) : (
          <>
            <HeroSection />
            <CelebrationCategories />
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
