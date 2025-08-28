import React from 'react';
import { Award, Users, Target, Zap } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Award,
      title: 'Excelencia',
      description: 'Comprometidos con la más alta calidad en cada proyecto'
    },
    {
      icon: Users,
      title: 'Colaboración',
      description: 'Trabajamos en equipo con nuestros clientes para lograr sus objetivos'
    },
    {
      icon: Target,
      title: 'Precisión',
      description: 'Cada detalle cuenta en la realización de proyectos excepcionales'
    },
    {
      icon: Zap,
      title: 'Innovación',
      description: 'Implementamos las últimas tecnologías y tendencias del sector'
    }
  ];

  return (
    <section id="nosotros" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Somos Vortika: Tu Aliado en 
                <span className="text-primary"> Arquitectura y Construcción</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Con más de 15 años de experiencia en el sector, nos hemos consolidado como líderes 
                en el diseño arquitectónico, construcción y desarrollo inmobiliario. Nuestro enfoque 
                integral nos permite acompañar a nuestros clientes desde la conceptualización hasta 
                la entrega final de sus proyectos.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Creemos que cada espacio tiene el potencial de transformar vidas, y es por eso que 
                nos dedicamos a crear ambientes funcionales, estéticamente excepcionales y 
                ambientalmente responsables.
              </p>
              
              <a
                href="#contacto"
                className="btn-outline inline-flex items-center gap-2"
              >
                Conoce Más Sobre Nosotros
              </a>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="aspect-square bg-muted rounded-2xl overflow-hidden shadow-medium">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Users className="w-20 h-20 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">Imagen del Equipo Profesional</p>
                    <p className="text-sm">Placeholder para foto corporativa</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-2xl shadow-accent opacity-20"></div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
            Nuestros Valores Fundamentales
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;