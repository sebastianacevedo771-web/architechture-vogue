import React, { useState } from 'react';
import { MapPin, Bed, Bath, Square, Heart, ExternalLink } from 'lucide-react';

const RealEstateSection = () => {
  const [filters, setFilters] = useState({
    type: '',
    location: '',
    priceRange: '',
    bedrooms: ''
  });

  const properties = [
    {
      id: 1,
      title: 'Apartamento de Lujo - Zona Rosa',
      location: 'Bogotá, Zona Rosa',
      price: '$850,000,000',
      type: 'Apartamento',
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
      featured: true,
      status: 'Venta'
    },
    {
      id: 2,
      title: 'Casa Moderna - Conjunto Cerrado',
      location: 'Medellín, El Poblado',
      price: '$1,200,000,000',
      type: 'Casa',
      bedrooms: 4,
      bathrooms: 3,
      area: 220,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
      featured: false,
      status: 'Venta'
    },
    {
      id: 3,
      title: 'Oficina Corporativa - Centro',
      location: 'Cali, Centro',
      price: '$3,500,000/mes',
      type: 'Oficina',
      bedrooms: 0,
      bathrooms: 2,
      area: 180,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
      featured: false,
      status: 'Arriendo'
    },
    {
      id: 4,
      title: 'Penthouse con Vista al Mar',
      location: 'Cartagena, Bocagrande',
      price: '$2,800,000,000',
      type: 'Apartamento',
      bedrooms: 4,
      bathrooms: 4,
      area: 300,
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
      featured: true,
      status: 'Venta'
    },
    {
      id: 5,
      title: 'Local Comercial - Centro Comercial',
      location: 'Barranquilla, Norte',
      price: '$8,000,000/mes',
      type: 'Local',
      bedrooms: 0,
      bathrooms: 1,
      area: 150,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
      featured: false,
      status: 'Arriendo'
    },
    {
      id: 6,
      title: 'Casa Campestre - Finca',
      location: 'Pereira, La Virginia',
      price: '$950,000,000',
      type: 'Casa',
      bedrooms: 5,
      bathrooms: 4,
      area: 400,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop&crop=entropy&cs=tinysrgb',
      featured: false,
      status: 'Venta'
    }
  ];

  const handleFilterChange = (field: string, value: string) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="inmobiliaria" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Encuentra Tu Inmueble 
            <span className="text-primary"> Ideal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explora nuestra selección exclusiva de propiedades premium en las mejores ubicaciones de Colombia
          </p>
        </div>

        {/* Search Filters */}
        <div className="bg-white rounded-xl shadow-soft p-6 mb-12 border border-border/50">
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Tipo de Inmueble
              </label>
              <select
                value={filters.type}
                onChange={(e) => handleFilterChange('type', e.target.value)}
                className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              >
                <option value="">Todos los tipos</option>
                <option value="apartamento">Apartamento</option>
                <option value="casa">Casa</option>
                <option value="oficina">Oficina</option>
                <option value="local">Local Comercial</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Ubicación
              </label>
              <input
                type="text"
                placeholder="Ej: Bogotá, Medellín..."
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Rango de Precio
              </label>
              <select
                value={filters.priceRange}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              >
                <option value="">Cualquier precio</option>
                <option value="0-500">$0 - $500M</option>
                <option value="500-1000">$500M - $1,000M</option>
                <option value="1000-2000">$1,000M - $2,000M</option>
                <option value="2000+">$2,000M+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Habitaciones
              </label>
              <select
                value={filters.bedrooms}
                onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              >
                <option value="">Cualquier cantidad</option>
                <option value="1">1 Habitación</option>
                <option value="2">2 Habitaciones</option>
                <option value="3">3 Habitaciones</option>
                <option value="4+">4+ Habitaciones</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <button className="btn-hero w-full md:w-auto px-8">
              Buscar Propiedades
            </button>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className="card-property animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Property Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={`${property.title} - Propiedad inmobiliaria Vortika`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                {/* Featured Badge */}
                {property.featured && (
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Destacado
                  </div>
                )}

                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                  property.status === 'Venta' 
                    ? 'bg-success/90 text-white' 
                    : 'bg-primary/90 text-white'
                }`}>
                  {property.status}
                </div>

                {/* Like Button */}
                <button className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <Heart className="w-5 h-5 text-muted-foreground hover:text-red-500" />
                </button>
              </div>

              {/* Property Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {property.title}
                </h3>
                
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  {property.location}
                </div>

                <div className="text-2xl font-bold text-primary mb-4">
                  {property.price}
                </div>

                {/* Property Details */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  {property.bedrooms > 0 && (
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      {property.bedrooms} hab.
                    </div>
                  )}
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    {property.bathrooms} baños
                  </div>
                  <div className="flex items-center">
                    <Square className="w-4 h-4 mr-1" />
                    {property.area} m²
                  </div>
                </div>

                <button className="w-full btn-outline flex items-center justify-center gap-2">
                  Ver Detalles
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#"
            className="btn-hero inline-flex items-center gap-2"
          >
            Ver Todas las Propiedades
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default RealEstateSection;