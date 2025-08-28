import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-architecture.jpg';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Arquitectura moderna - Diseño profesional por Vortika"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative container-custom text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up">
            Diseñamos y Construimos
            <span className="block text-accent">tus Sueños</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Empresa líder en arquitectura, construcción y bienes raíces con más de 15 años de experiencia creando espacios excepcionales
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="#proyectos"
              className="btn-hero inline-flex items-center gap-3 group"
            >
              Ver Nuestros Proyectos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button className="btn-secondary inline-flex items-center gap-3 group">
              <Play className="w-5 h-5" />
              Ver Video Corporativo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">250+</div>
              <div className="text-white/80 mt-1">Proyectos Diseñados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">180+</div>
              <div className="text-white/80 mt-1">Construcciones Entregadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">15+</div>
              <div className="text-white/80 mt-1">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">300+</div>
              <div className="text-white/80 mt-1">Clientes Satisfechos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;