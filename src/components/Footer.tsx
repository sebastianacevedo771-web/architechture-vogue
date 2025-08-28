import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowUp, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'INICIO', href: '#inicio' },
    { name: 'SERVICIOS', href: '#servicios' },
    { name: 'PROYECTOS', href: '#proyectos' },
    { name: 'INMOBILIARIA', href: '#inmobiliaria' },
    { name: 'NOSOTROS', href: '#nosotros' },
    { name: 'CONTACTO', href: '#contacto' }
  ];

  const services = [
    'DISEÑO ARQUITECTÓNICO 4D',
    'CONSTRUCCIÓN ROBOTIZADA',
    'REMODELACIÓN INTELIGENTE',
    'INTERVENTORÍA DIGITAL',
    'INMOBILIARIA BLOCKCHAIN',
    'CONSULTORÍA TECH'
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
    <footer className="bg-gradient-to-b from-background to-card relative overflow-hidden border-t border-primary/20">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-custom py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-neon mr-4">
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>
                <span className="text-3xl font-bold text-foreground glow-text uppercase tracking-wider">
                  VORTIKA
                </span>
              </div>
              <p className="text-foreground/80 leading-relaxed mb-8 font-light">
                Empresa líder en arquitectura futurista, construcción inteligente y bienes raíces digitales 
                con más de 15 años revolucionando el sector y creando espacios que transforman el futuro.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-foreground/80 group hover:text-primary transition-colors">
                  <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center mr-4 shadow-glow">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-medium">+57 (1) 234-5678</span>
                </div>
                <div className="flex items-center text-foreground/80 group hover:text-accent transition-colors">
                  <div className="w-10 h-10 bg-gradient-accent rounded-xl flex items-center justify-center mr-4 shadow-glow">
                    <Mail className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <span className="font-medium">info@vortika.com</span>
                </div>
                <div className="flex items-start text-foreground/80 group hover:text-primary transition-colors">
                  <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center mr-4 mt-0.5 shadow-glow">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-medium">Calle 93 #15-32, Oficina 501<br />Bogotá, Colombia</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-foreground glow-text uppercase tracking-wider">
                NAVEGACIÓN
              </h3>
              <div className="h-1 w-16 bg-gradient-primary rounded-full mb-6"></div>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-foreground/80 hover:text-accent transition-all duration-300 hover:translate-x-2 transform inline-block font-medium uppercase tracking-wide text-sm"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-foreground glow-text uppercase tracking-wider">
                SERVICIOS
              </h3>
              <div className="h-1 w-16 bg-gradient-accent rounded-full mb-6"></div>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={service}>
                    <span 
                      className="text-foreground/80 hover:text-primary transition-all duration-300 cursor-pointer hover:translate-x-2 transform inline-block font-medium text-sm"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-foreground glow-text uppercase tracking-wider">
                CONECTA
              </h3>
              <div className="h-1 w-16 bg-gradient-primary rounded-full mb-6"></div>
              <p className="text-foreground/80 mb-8 font-light">
                Síguenos para conocer las últimas innovaciones y proyectos del futuro.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4 mb-10">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-14 h-14 glass-effect rounded-2xl flex items-center justify-center hover:shadow-neon hover:scale-110 transition-all duration-300 group border border-primary/20 hover:border-primary/50"
                    aria-label={social.name}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <social.icon className="w-6 h-6 text-foreground/70 group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>

              {/* Newsletter */}
              <div className="glass-effect rounded-2xl p-6 border border-primary/20">
                <h4 className="text-lg font-bold mb-3 text-foreground uppercase tracking-wide">
                  NEWSLETTER TECH
                </h4>
                <p className="text-foreground/70 text-sm mb-4 font-light">
                  Recibe las últimas innovaciones arquitectónicas del futuro.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="flex-1 px-4 py-3 bg-card/50 border border-primary/30 rounded-l-xl focus:outline-none focus:border-primary focus:bg-card/70 transition-all text-foreground placeholder-foreground/50 backdrop-blur-sm"
                  />
                  <button className="px-6 py-3 bg-gradient-primary hover:shadow-neon rounded-r-xl transition-all duration-300 hover:scale-105">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 bg-card/30 backdrop-blur-sm">
          <div className="container-custom py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-foreground/60 text-sm mb-4 md:mb-0 font-light">
                © {currentYear} VORTIKA. Todos los derechos reservados. | Arquitectura del Futuro
              </div>
              
              <div className="flex items-center space-x-8">
                <a href="#" className="text-foreground/60 hover:text-accent text-sm transition-colors font-medium uppercase tracking-wide">
                  PRIVACIDAD
                </a>
                <a href="#" className="text-foreground/60 hover:text-accent text-sm transition-colors font-medium uppercase tracking-wide">
                  TÉRMINOS
                </a>
                <a href="#" className="text-foreground/60 hover:text-accent text-sm transition-colors font-medium uppercase tracking-wide">
                  COOKIES
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-neon hover:shadow-electric hover:scale-110 transition-all duration-300 z-50 group border border-primary-light/30"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-8 h-8 text-primary-foreground group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;