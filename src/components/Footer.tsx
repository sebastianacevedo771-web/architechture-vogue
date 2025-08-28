import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Inmobiliaria', href: '#inmobiliaria' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const services = [
    'Diseño Arquitectónico',
    'Construcción',
    'Remodelación',
    'Interventoría',
    'Gestión Inmobiliaria',
    'Consultoría'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Twitter, href: '#', name: 'Twitter' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container-custom py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">V</span>
                </div>
                <span className="text-2xl font-bold">Vortika</span>
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                Empresa líder en arquitectura, construcción y bienes raíces con más de 15 años 
                de experiencia creando espacios excepcionales que transforman vidas.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-white/80">
                  <Phone className="w-5 h-5 mr-3 text-accent" />
                  <span>+57 (1) 234-5678</span>
                </div>
                <div className="flex items-center text-white/80">
                  <Mail className="w-5 h-5 mr-3 text-accent" />
                  <span>info@vortika.com</span>
                </div>
                <div className="flex items-start text-white/80">
                  <MapPin className="w-5 h-5 mr-3 text-accent mt-0.5" />
                  <span>Calle 93 #15-32, Oficina 501<br />Bogotá, Colombia</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Enlaces Rápidos</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-accent transition-colors hover:translate-x-1 transform duration-200 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Nuestros Servicios</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-white/80 hover:text-accent transition-colors cursor-pointer hover:translate-x-1 transform duration-200 inline-block">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Síguenos</h3>
              <p className="text-white/80 mb-6">
                Mantente al día con nuestros últimos proyectos y novedades del sector.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4 mb-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <social.icon className="w-6 h-6 text-white group-hover:text-white" />
                  </a>
                ))}
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="text-lg font-medium mb-3">Newsletter</h4>
                <p className="text-white/70 text-sm mb-4">
                  Suscríbete para recibir noticias y ofertas especiales.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Tu email"
                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg focus:outline-none focus:border-accent focus:bg-white/20 transition-colors text-white placeholder-white/50"
                  />
                  <button className="px-4 py-2 bg-accent hover:bg-accent/90 rounded-r-lg transition-colors">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container-custom py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-white/60 text-sm mb-4 md:mb-0">
                © {currentYear} Vortika. Todos los derechos reservados.
              </div>
              
              <div className="flex items-center space-x-6">
                <a href="#" className="text-white/60 hover:text-accent text-sm transition-colors">
                  Política de Privacidad
                </a>
                <a href="#" className="text-white/60 hover:text-accent text-sm transition-colors">
                  Términos de Servicio
                </a>
                <a href="#" className="text-white/60 hover:text-accent text-sm transition-colors">
                  Política de Cookies
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-accent hover:shadow-strong hover:scale-110 transition-all duration-300 z-50"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-6 h-6 text-white" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;