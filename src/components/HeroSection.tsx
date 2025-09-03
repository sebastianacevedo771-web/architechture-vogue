import React from 'react';
import { ArrowRight, Play, Building2 } from 'lucide-react';
import heroImage from '@/assets/hero-futuristic.jpg';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Arquitectura moderna - Diseño innovador por Vortika"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
        
        {/* Subtle floating elements */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary/60 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent/40 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative container-custom text-center text-foreground z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Heading */}
          <div className="mb-8 animate-fade-up">
            <h1 className="mb-4 font-heading">
              Construimos el
              <span className="block text-primary">
                Futuro Hoy
              </span>
            </h1>
            <div className="h-0.5 w-24 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <p className="text-xl md:text-2xl mb-12 text-foreground/80 animate-fade-up max-w-3xl mx-auto leading-relaxed" 
             style={{ animationDelay: '0.2s' }}>
            Transformamos espacios con arquitectura innovadora y construcción sostenible. 
            Cada proyecto es una oportunidad de crear algo extraordinario.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-up" 
               style={{ animationDelay: '0.4s' }}>
            <a
              href="#proyectos"
              className="btn-hero inline-flex items-center gap-3 group"
            >
              <Building2 className="w-5 h-5" />
              Explorar Proyectos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button className="btn-secondary inline-flex items-center gap-3 group">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Ver Presentación
            </button>
          </div>

          {/* Stats with Modern Design */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up" 
               style={{ animationDelay: '0.6s' }}>
            <div className="glass-effect rounded-xl p-6 hover:shadow-glass transition-all duration-300 group">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform">
                250+
              </div>
              <div className="text-foreground/70 text-sm font-medium">
                Proyectos Completados
              </div>
              <div className="h-0.5 bg-primary w-8 mx-auto mt-3 rounded-full"></div>
            </div>
            
            <div className="glass-effect rounded-xl p-6 hover:shadow-glass transition-all duration-300 group">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2 group-hover:scale-105 transition-transform">
                180+
              </div>
              <div className="text-foreground/70 text-sm font-medium">
                Construcciones Entregadas
              </div>
              <div className="h-0.5 bg-accent w-8 mx-auto mt-3 rounded-full"></div>
            </div>
            
            <div className="glass-effect rounded-xl p-6 hover:shadow-glass transition-all duration-300 group">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform">
                15+
              </div>
              <div className="text-foreground/70 text-sm font-medium">
                Años de Experiencia
              </div>
              <div className="h-0.5 bg-primary w-8 mx-auto mt-3 rounded-full"></div>
            </div>
            
            <div className="glass-effect rounded-xl p-6 hover:shadow-glass transition-all duration-300 group">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2 group-hover:scale-105 transition-transform">
                98%
              </div>
              <div className="text-foreground/70 text-sm font-medium">
                Satisfacción Cliente
              </div>
              <div className="h-0.5 bg-accent w-8 mx-auto mt-3 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border border-primary/40 rounded-full flex justify-center relative">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;