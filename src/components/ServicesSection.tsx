import React from 'react';
import { 
  Ruler, 
  Hammer, 
  Home, 
  ClipboardCheck, 
  Building, 
  HeadphonesIcon 
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Ruler,
      title: 'DISEÑO ARQUITECTÓNICO',
      description: 'Creamos espacios únicos que combinan funcionalidad futurista, estética revolucionaria y sostenibilidad inteligente.',
      features: ['Diseño conceptual 4D', 'Planos holográficos', 'Renders ultra-realistas', 'Licencias digitales']
    },
    {
      icon: Hammer,
      title: 'CONSTRUCCIÓN SMART',
      description: 'Ejecutamos proyectos con tecnología de construcción avanzada, estándares superiores y cronogramas optimizados.',
      features: ['Construcción robotizada', 'Materiales inteligentes', 'Supervisión AI', 'Control de calidad 360°']
    },
    {
      icon: Home,
      title: 'REMODELACIÓN TECH',
      description: 'Transformamos espacios existentes con tecnología de punta para maximizar potencial y adaptabilidad futura.',
      features: ['Renovación holística', 'Domótica avanzada', 'Optimización espacial IA', 'Acabados premium tech']
    },
    {
      icon: ClipboardCheck,
      title: 'INTERVENTORÍA 4.0',
      description: 'Supervisión técnica digital y administrativa para garantizar cumplimiento de especificaciones y cronogramas.',
      features: ['Control tech avanzado', 'Gestión automatizada', 'Reportes en tiempo real', 'Calidad certificada']
    },
    {
      icon: Building,
      title: 'INMOBILIARIA DIGITAL',
      description: 'Servicios integrales digitalizados para compra, venta y administración de propiedades inteligentes.',
      features: ['Inversión predictiva', 'Valoración IA', 'Marketing inmersivo', 'Trámites blockchain']
    },
    {
      icon: HeadphonesIcon,
      title: 'CONSULTORÍA EXPERT',
      description: 'Asesoramiento especializado en todas las etapas de desarrollo con metodologías innovadoras.',
      features: ['Estudios predictivos', 'Asesoría estratégica', 'Optimización algorítmica', 'Gestión integral']
    }
  ];

  return (
    <section id="servicios" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground glow-text uppercase tracking-wider">
            SERVICIOS
            <span className="block text-accent glow-accent text-3xl md:text-5xl mt-2">
              INTEGRALES 4.0
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto font-light leading-relaxed">
            Ofrecemos una gama completa de servicios futuristas para satisfacer todas las necesidades 
            de nuestros clientes en arquitectura inteligente, construcción robotizada y bienes raíces digitales
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-service group animate-fade-up relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mb-6 shadow-neon group-hover:shadow-electric group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors uppercase tracking-wider glow-text">
                  {service.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-8 font-light">
                  {service.description}
                </p>
              </div>

              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-foreground/70">
                    <div className="w-3 h-3 bg-gradient-accent rounded-full mr-4 flex-shrink-0 shadow-glow"></div>
                    <span className="font-medium uppercase tracking-wide">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-primary/20">
                <button className="text-accent font-bold hover:text-accent-glow transition-all duration-300 group-hover:translate-x-2 uppercase tracking-wider text-sm">
                  VER DETALLES COMPLETOS →
                </button>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA with Futuristic Design */}
        <div className="text-center mt-20">
          <div className="bg-gradient-primary rounded-3xl p-12 md:p-16 text-primary-foreground shadow-electric border border-primary-light/30 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 opacity-50"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-accent"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-wider">
                ¿TIENES UN PROYECTO
                <span className="block text-accent glow-accent">DEL FUTURO?</span>
              </h3>
              <p className="text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                Nuestro equipo de expertos en tecnología arquitectónica está listo para convertir 
                tus ideas más ambiciosas en realidad. Agenda una consulta futurista hoy mismo.
              </p>
              <a
                href="#contacto"
                className="btn-secondary inline-flex items-center gap-4 text-lg font-bold uppercase tracking-wider"
              >
                SOLICITAR CONSULTA FUTURISTA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;