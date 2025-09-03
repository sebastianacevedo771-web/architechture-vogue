import React, { useState, useEffect } from 'react';
import { Menu, X, Building2 } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Inmobiliaria', href: '#inmobiliaria' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect shadow-glass' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#inicio" className="flex items-center group">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-soft group-hover:shadow-accent transition-all duration-300 group-hover:scale-105">
                <Building2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="ml-3 text-xl font-heading font-semibold text-foreground">
                Vortika
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link font-medium text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg glass-effect hover:shadow-glass transition-all duration-300 border border-border/30"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-primary" />
            ) : (
              <Menu className="w-5 h-5 text-primary" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="glass-effect rounded-xl shadow-glass mt-4 border border-border/30 backdrop-blur-xl">
              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:text-primary hover:bg-muted/20 transition-all duration-300 border-b border-border/10 last:border-b-0"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;