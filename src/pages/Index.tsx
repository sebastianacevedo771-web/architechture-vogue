import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import RealEstateSection from '@/components/RealEstateSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <RealEstateSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;