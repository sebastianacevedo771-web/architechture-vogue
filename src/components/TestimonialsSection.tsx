import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'María Elena Rodríguez',
      position: 'Propietaria',
      project: 'Casa Moderna Santa Fe',
      rating: 5,
      text: 'Vortika superó todas nuestras expectativas. Su equipo profesional nos acompañó durante todo el proceso, desde el diseño inicial hasta la entrega final. La calidad de construcción es excepcional y el resultado final es exactamente lo que soñamos.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c4e2d4c2?w=100&h=100&fit=crop&crop=face&cs=tinysrgb'
    },
    {
      id: 2,
      name: 'Carlos Alberto Mendoza',
      position: 'CEO',
      project: 'Torre Empresarial Sky Business',
      rating: 5,
      text: 'Trabajar con Vortika fue una decisión acertada. Su experiencia en proyectos corporativos y atención al detalle se refleja en cada aspecto del edificio. Cumplieron con los tiempos establecidos y el presupuesto acordado.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&cs=tinysrgb'
    },
    {
      id: 3,
      name: 'Ana Sofía Gómez',
      position: 'Inversionista',
      project: 'Conjunto Residencial Alameda',
      rating: 5,
      text: 'La asesoría integral de Vortika en nuestro proyecto de inversión inmobiliaria fue fundamental para el éxito. Su conocimiento del mercado y capacidad de ejecución nos generó la confianza necesaria para seguir trabajando juntos.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&cs=tinysrgb'
    },
    {
      id: 4,
      name: 'Roberto Pineda',
      position: 'Director Comercial',
      project: 'Hotel Boutique Centro Histórico',
      rating: 5,
      text: 'La restauración de nuestro edificio colonial requería un toque especial, y Vortika lo logró perfectamente. Respetaron la arquitectura histórica mientras incorporaron todas las comodidades modernas que necesitábamos.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&cs=tinysrgb'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentReview = testimonials[currentTestimonial];

  return (
    <section className="section-padding bg-gradient-primary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Lo que Dicen Nuestros
            <span className="text-accent"> Clientes</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor recompensa. 
            Conoce sus experiencias trabajando con nosotros.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-accent" />
              </div>
            </div>

            {/* Rating */}
            <div className="flex justify-center mb-6">
              {[...Array(currentReview.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-accent fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl md:text-2xl text-white text-center leading-relaxed mb-8 font-light">
              "{currentReview.text}"
            </blockquote>

            {/* Client Info */}
            <div className="flex items-center justify-center">
              <img
                src={currentReview.image}
                alt={`Foto de ${currentReview.name}`}
                className="w-16 h-16 rounded-full object-cover border-3 border-white/30 mr-4"
              />
              <div className="text-center md:text-left">
                <h4 className="text-xl font-semibold text-white">
                  {currentReview.name}
                </h4>
                <p className="text-white/80">
                  {currentReview.position}
                </p>
                <p className="text-accent text-sm font-medium">
                  {currentReview.project}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors border border-white/30"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors border border-white/30"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentTestimonial 
                  ? 'bg-accent' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Ver testimonio ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">98%</div>
            <div className="text-white/80">Satisfacción del Cliente</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">300+</div>
            <div className="text-white/80">Clientes Felices</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">89%</div>
            <div className="text-white/80">Clientes Recurrentes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">4.9/5</div>
            <div className="text-white/80">Calificación Promedio</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;