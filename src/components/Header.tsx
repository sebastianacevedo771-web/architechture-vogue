import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

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
    { name: 'INICIO', href: '#inicio' },
    { name: 'PROYECTOS', href: '#proyectos' },
    { name: 'SERVICIOS', href: '#servicios' },
    { name: 'NOSOTROS', href: '#nosotros' },
    { name: 'INMOBILIARIA', href: '#inmobiliaria' },
    { name: 'CONTACTO', href: '#contacto' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-effect shadow-electric' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#inicio" className="flex items-center group">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-neon group-hover:shadow-electric transition-all duration-300 group-hover:scale-110">
                <Zap className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="ml-4 text-2xl font-bold text-foreground glow-text uppercase tracking-wider">
                VORTIKA
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link font-bold text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-xl glass-effect hover:shadow-glow transition-all duration-300 border border-primary/30"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="glass-effect rounded-2xl shadow-electric mt-4 border border-primary/20 backdrop-blur-xl">
              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-6 py-4 rounded-xl text-base font-bold text-foreground hover:text-primary hover:bg-card/50 transition-all duration-300 border-b border-border/20 last:border-b-0 uppercase tracking-wider"
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