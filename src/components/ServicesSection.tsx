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
      title: 'Diseño Arquitectónico',
      description: 'Creamos espacios únicos que combinan funcionalidad, estética y sostenibilidad para cada cliente.',
      features: ['Diseño conceptual', 'Planos técnicos', 'Renders 3D', 'Licencias']
    },
    {
      icon: Hammer,
      title: 'Construcción',
      description: 'Ejecutamos proyectos de construcción con los más altos estándares de calidad y dentro del tiempo establecido.',
      features: ['Obra nueva', 'Ampliaciones', 'Supervisión técnica', 'Control de calidad']
    },
    {
      icon: Home,
      title: 'Remodelación',
      description: 'Transformamos espacios existentes para maximizar su potencial y adaptarlos a nuevas necesidades.',
      features: ['Renovación integral', 'Interiorismo', 'Optimización espacial', 'Acabados premium']
    },
    {
      icon: ClipboardCheck,
      title: 'Interventoría',
      description: 'Supervisión técnica y administrativa para garantizar el cumplimiento de especificaciones y cronogramas.',
      features: ['Control técnico', 'Gestión administrativa', 'Informes periódicos', 'Aseguramento de calidad']
    },
    {
      icon: Building,
      title: 'Gestión Inmobiliaria',
      description: 'Servicios integrales para la compra, venta y administración de propiedades inmobiliarias.',
      features: ['Asesoría en inversión', 'Valoración de inmuebles', 'Marketing inmobiliario', 'Trámites legales']
    },
    {
      icon: HeadphonesIcon,
      title: 'Consultoría',
      description: 'Asesoramiento especializado en todas las etapas de desarrollo de proyectos arquitectónicos y constructivos.',
      features: ['Estudios de factibilidad', 'Asesoría técnica', 'Optimización de costos', 'Gestión de permisos']
    }
  ];

  return (
    <section id="servicios" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Nuestros Servicios 
            <span className="text-primary"> Integrales</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos una gama completa de servicios para satisfacer todas las necesidades 
            de nuestros clientes en arquitectura, construcción y bienes raíces
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-service group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border/50">
                <button className="text-primary font-medium hover:text-primary-dark transition-colors group-hover:underline">
                  Ver Detalles del Servicio →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Tienes un Proyecto en Mente?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Nuestro equipo de expertos está listo para convertir tus ideas en realidad. 
              Agenda una consulta gratuita hoy mismo.
            </p>
            <a
              href="#contacto"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Solicitar Consulta Gratuita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;