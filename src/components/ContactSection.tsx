import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Diseño Arquitectónico',
    'Construcción',
    'Venta de Inmueble',
    'Alquiler de Inmueble',
    'Remodelación',
    'Interventoría',
    'Consultoría',
    'Información General'
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      details: '+57 (1) 234-5678',
      subtitle: 'Lun - Vie: 8:00 AM - 6:00 PM'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@vortika.com',
      subtitle: 'Respuesta en 24 horas'
    },
    {
      icon: MapPin,
      title: 'Oficina Principal',
      details: 'Calle 93 #15-32, Oficina 501',
      subtitle: 'Bogotá, Colombia'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Por favor completa los campos obligatorios');
      return;
    }

    if (!validateEmail(formData.email)) {
      alert('Por favor ingresa un email válido');
      return;
    }

    setIsSubmitting(true);
    
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contacto" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            ¿Tienes un Proyecto 
            <span className="text-primary"> en Mente?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos aquí para convertir tus ideas en realidad. Contáctanos y comencemos 
            a trabajar juntos en tu próximo proyecto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <div className="bg-white rounded-2xl shadow-medium p-8 border border-border/50">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Envíanos un Mensaje
              </h3>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-success mb-2">
                    ¡Mensaje Enviado con Éxito!
                  </h4>
                  <p className="text-muted-foreground">
                    Gracias por contactarnos. Te responderemos muy pronto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Teléfono (Opcional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder="+57 300 123 4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                        Estoy Buscando...
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      >
                        <option value="">Selecciona un servicio</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Tu Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                      placeholder="Cuéntanos sobre tu proyecto, presupuesto estimado, fechas importantes, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-hero disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando Mensaje...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar Mensaje
                      </>
                    )}
                  </button>

                  <p className="text-sm text-muted-foreground text-center">
                    * Campos obligatorios. Responderemos en menos de 24 horas.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-slide-in-right">
            <div className="space-y-8">
              {/* Contact Cards */}
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="card-elevated group hover:border-primary/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      <p className="text-foreground font-medium mb-1">
                        {info.details}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Business Hours */}
              <div className="card-elevated">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mr-4">
                    <Clock className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      Horarios de Atención
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Lunes - Viernes:</span>
                        <span className="text-foreground font-medium">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sábados:</span>
                        <span className="text-foreground font-medium">9:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Domingos:</span>
                        <span className="text-foreground font-medium">Cerrado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Placeholder */}
              <div className="card-elevated">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Nuestra Ubicación
                </h4>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">Mapa de Google Maps</p>
                      <p className="text-xs">Placeholder para iframe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;