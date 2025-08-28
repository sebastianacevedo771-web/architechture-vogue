import React from 'react';
import { ExternalLink, MapPin, Calendar } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Residencia Moderna Santa Fe',
      location: 'Bogotá, Colombia',
      year: '2023',
      category: 'Residencial',
      description: 'Casa moderna de 350m² con diseño minimalista y tecnología domótica integrada.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
      status: 'Completado'
    },
    {
      id: 2,
      title: 'Centro Comercial Plaza Verde',
      location: 'Medellín, Colombia',
      year: '2023',
      category: 'Comercial',
      description: 'Complejo comercial sostenible de 5,000m² con certificación LEED Gold.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
      status: 'En Construcción'
    },
    {
      id: 3,
      title: 'Torre Empresarial Sky Business',
      location: 'Cali, Colombia',
      year: '2022',
      category: 'Corporativo',
      description: 'Edificio de oficinas de 25 pisos con fachada inteligente y espacios flexibles.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
      status: 'Completado'
    },
    {
      id: 4,
      title: 'Conjunto Residencial Alameda',
      location: 'Barranquilla, Colombia',
      year: '2023',
      category: 'Residencial',
      description: 'Desarrollo residencial de 120 unidades con áreas comunes y parques.',
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
      status: 'En Diseño'
    },
    {
      id: 5,
      title: 'Hotel Boutique Centro Histórico',
      location: 'Cartagena, Colombia',
      year: '2022',
      category: 'Hospitalidad',
      description: 'Restauración y ampliación de edificio colonial para hotel boutique de 40 habitaciones.',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
      status: 'Completado'
    },
    {
      id: 6,
      title: 'Campus Universitario Innovación',
      location: 'Bucaramanga, Colombia',
      year: '2023',
      category: 'Educativo',
      description: 'Complejo educativo de 8,000m² con laboratorios especializados y biblioteca central.',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
      status: 'En Construcción'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completado':
        return 'bg-success/10 text-success border-success/20';
      case 'En Construcción':
        return 'bg-accent/10 text-accent-foreground border-accent/20';
      case 'En Diseño':
        return 'bg-primary/10 text-primary border-primary/20';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <section id="proyectos" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Nuestros Proyectos Más 
            <span className="text-primary"> Destacados</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre algunos de nuestros proyectos más emblemáticos que demuestran 
            nuestro compromiso con la excelencia en diseño y construcción
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="card-project group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} - Proyecto de arquitectura por Vortika`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                  {project.status}
                </div>

                {/* Category */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground">
                  {project.category}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {project.location}
                  <Calendar className="w-4 h-4 ml-4 mr-1" />
                  {project.year}
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <button className="flex items-center text-primary font-medium hover:text-primary-dark transition-colors group-hover:underline">
                  Ver Detalles del Proyecto
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#"
            className="btn-outline inline-flex items-center gap-2"
          >
            Ver Todos los Proyectos
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;