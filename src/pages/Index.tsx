import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import WordCloudSection from '@/components/sections/WordCloudSection';
import AboutSection from '@/components/sections/AboutSection';
import GallerySection from '@/components/sections/GallerySection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Ajout d'un effet pour remonter en haut à chaque changement de section
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <HeroSection />
            <AboutSection />
            <GallerySection />
            <TestimonialsSection />
            <WordCloudSection />
          </>
        );
      case 'about':
        return <AboutSection />;
      case 'gallery':
        return <GallerySection />;
      case 'contact':
        return <ContactSection />;
      default:
        return (
          <>
            <HeroSection />
            <AboutSection />
            <GallerySection />
            <TestimonialsSection />
            <WordCloudSection />
            
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="pt-16">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
