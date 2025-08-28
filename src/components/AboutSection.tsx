import React from 'react';
import { Award, Users, Target, Zap } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Award,
      title: 'EXCELENCIA',
      description: 'Comprometidos con la más alta calidad en cada proyecto futurista'
    },
    {
      icon: Users,
      title: 'COLABORACIÓN',
      description: 'Trabajamos en equipo con tecnología avanzada para lograr objetivos'
    },
    {
      icon: Target,
      title: 'PRECISIÓN',
      description: 'Cada detalle cuenta en la realización de proyectos excepcionales'
    },
    {
      icon: Zap,
      title: 'INNOVACIÓN',
      description: 'Implementamos las últimas tecnologías y tendencias del futuro'
    }
  ];

  return (
    <section id="nosotros" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <div className="mb-12">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground glow-text">
                SOMOS VORTIKA
                <span className="block text-accent glow-accent text-3xl md:text-5xl mt-2">
                  TU ALIADO DEL FUTURO
                </span>
              </h2>
              <div className="h-1 w-24 bg-gradient-primary rounded-full mb-8"></div>
              
              <p className="text-xl text-foreground/80 leading-relaxed mb-8 font-light">
                Con más de 15 años de experiencia revolucionando el sector, nos hemos consolidado 
                como líderes en diseño arquitectónico futurista, construcción inteligente y desarrollo 
                inmobiliario de vanguardia. Nuestro enfoque integral nos permite acompañar a nuestros 
                clientes desde la conceptualización hasta la entrega final de proyectos extraordinarios.
              </p>
              <p className="text-xl text-foreground/80 leading-relaxed mb-10 font-light">
                Creemos que cada espacio tiene el potencial de transformar el futuro, y es por eso que 
                nos dedicamos a crear ambientes inteligentes, estéticamente revolucionarios y 
                tecnológicamente avanzados.
              </p>
              
              <a
                href="#contacto"
                className="btn-outline inline-flex items-center gap-3 group"
              >
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                CONOCE MÁS SOBRE NOSOTROS
              </a>
            </div>
          </div>

          {/* Future Tech Visualization */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="aspect-square glass-effect rounded-3xl overflow-hidden shadow-electric border border-primary/30 relative">
                {/* Holographic Effect */}
                <div className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/10 to-primary/30 flex items-center justify-center relative overflow-hidden">
                  {/* Floating Tech Elements */}
                  <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-4 h-4 border-2 border-primary rounded-lg animate-float opacity-60"></div>
                    <div className="absolute top-1/3 right-1/4 w-3 h-3 border border-accent rounded-full animate-float opacity-80" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-1/3 left-1/3 w-5 h-5 border-2 border-primary/50 rounded-xl animate-float" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-accent rounded-full animate-float opacity-70" style={{ animationDelay: '3s' }}></div>
                  </div>
                  
                  {/* Central Icon */}
                  <div className="text-center text-foreground/60 relative z-10">
                    <Users className="w-32 h-32 mx-auto mb-6 opacity-60 glow-text" />
                    <h3 className="text-2xl font-bold uppercase tracking-wider">EQUIPO PROFESIONAL</h3>
                    <p className="text-lg mt-2 opacity-80 font-light">ARQUITECTOS DEL FUTURO</p>
                  </div>
                  
                  {/* Scanning Lines Effect */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-primary animate-ping"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-accent animate-ping" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
                
                {/* Corner Decorations */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent rounded-xl shadow-neon opacity-80 animate-glow-pulse"></div>
                <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-primary rounded-lg shadow-electric opacity-60 animate-float"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Values with Futuristic Design */}
        <div className="mt-32">
          <h3 className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground glow-text uppercase tracking-wider">
            VALORES FUNDAMENTALES
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center animate-fade-up glass-effect rounded-2xl p-8 hover:shadow-electric transition-all duration-500 border border-border/30 hover:border-primary/50 group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-neon group-hover:shadow-electric group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-foreground uppercase tracking-wider glow-text">
                  {value.title}
                </h4>
                <p className="text-foreground/80 leading-relaxed font-light">
                  {value.description}
                </p>
                <div className="h-0.5 bg-gradient-primary w-16 mx-auto mt-4 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;