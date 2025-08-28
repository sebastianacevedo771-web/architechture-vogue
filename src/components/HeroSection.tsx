import React from 'react';
import { ArrowRight, Play, Zap } from 'lucide-react';
import heroImage from '@/assets/hero-futuristic.jpg';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Arquitectura futurista - Diseño innovador por Vortika"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-float opacity-80" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary/50 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-float opacity-70" style={{ animationDelay: '3s' }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative container-custom text-center text-foreground z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <div className="mb-8 animate-fade-up">
            <h1 className="glow-text mb-4">
              ARQUITECTURA
              <span className="block glow-accent text-accent animate-glow-pulse">
                DEL FUTURO
              </span>
            </h1>
            <div className="h-1 w-32 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <p className="text-2xl md:text-3xl mb-12 text-foreground/90 animate-fade-up max-w-4xl mx-auto leading-relaxed font-light" 
             style={{ animationDelay: '0.3s' }}>
            Revolucionamos el mundo de la construcción con tecnología de vanguardia, 
            diseños innovadores y soluciones arquitectónicas que definen el mañana
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-up" 
               style={{ animationDelay: '0.6s' }}>
            <a
              href="#proyectos"
              className="btn-hero inline-flex items-center gap-4 group"
            >
              <Zap className="w-6 h-6" />
              EXPLORAR PROYECTOS
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
            
            <button className="btn-secondary inline-flex items-center gap-4 group">
              <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
              VER DEMO INTERACTIVO
            </button>
          </div>

          {/* Stats with Futuristic Design */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-up" 
               style={{ animationDelay: '0.9s' }}>
            <div className="glass-effect rounded-2xl p-6 hover:shadow-neon transition-all duration-500 group">
              <div className="text-4xl md:text-5xl font-bold text-primary glow-text mb-2 group-hover:scale-110 transition-transform">
                250+
              </div>
              <div className="text-foreground/80 text-sm uppercase tracking-wider">
                PROYECTOS DISEÑADOS
              </div>
              <div className="h-0.5 bg-gradient-primary w-12 mx-auto mt-3 rounded-full"></div>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 hover:shadow-neon transition-all duration-500 group">
              <div className="text-4xl md:text-5xl font-bold text-accent glow-accent mb-2 group-hover:scale-110 transition-transform">
                180+
              </div>
              <div className="text-foreground/80 text-sm uppercase tracking-wider">
                CONSTRUCCIONES SMART
              </div>
              <div className="h-0.5 bg-gradient-accent w-12 mx-auto mt-3 rounded-full"></div>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 hover:shadow-neon transition-all duration-500 group">
              <div className="text-4xl md:text-5xl font-bold text-primary glow-text mb-2 group-hover:scale-110 transition-transform">
                15+
              </div>
              <div className="text-foreground/80 text-sm uppercase tracking-wider">
                AÑOS INNOVANDO
              </div>
              <div className="h-0.5 bg-gradient-primary w-12 mx-auto mt-3 rounded-full"></div>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 hover:shadow-neon transition-all duration-500 group">
              <div className="text-4xl md:text-5xl font-bold text-accent glow-accent mb-2 group-hover:scale-110 transition-transform">
                98%
              </div>
              <div className="text-foreground/80 text-sm uppercase tracking-wider">
                SATISFACCIÓN CLIENT
              </div>
              <div className="h-0.5 bg-gradient-accent w-12 mx-auto mt-3 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator with Glow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-8 h-12 border-2 border-primary/50 rounded-full flex justify-center relative">
          <div className="w-1.5 h-4 bg-gradient-primary rounded-full mt-3 animate-pulse"></div>
          <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-ping"></div>
        </div>
      </div>

      {/* Side decorative elements */}
      <div className="absolute top-1/2 left-8 transform -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col space-y-4">
          <div className="w-12 h-0.5 bg-gradient-primary rounded-full"></div>
          <div className="w-8 h-0.5 bg-gradient-accent rounded-full"></div>
          <div className="w-6 h-0.5 bg-gradient-primary rounded-full"></div>
        </div>
      </div>
      
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col space-y-4">
          <div className="w-6 h-0.5 bg-gradient-accent rounded-full"></div>
          <div className="w-8 h-0.5 bg-gradient-primary rounded-full"></div>
          <div className="w-12 h-0.5 bg-gradient-accent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;