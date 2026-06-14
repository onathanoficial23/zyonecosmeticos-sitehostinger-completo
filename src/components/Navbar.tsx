import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, LogIn, UserPlus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'KITS ZYONE', href: '#kits' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Apresentação', href: '#apresentacao' },
    { name: 'Materiais', href: '#materiais' },
    { name: 'Passo a Passo', href: '#cadastro-passo-a-passo' },
    { name: 'Tutorial Compra', href: '#tutorial-primeira-compra' },
    { name: 'Cadastro', href: 'https://escritorio.zyone.com.br/cadastro#?id=onathanoficial&convite=MjA0MDc%3D' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold tracking-tighter text-zyone-dark">
              ZYONE
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-gray-600 hover:text-zyone-red transition-colors tracking-widest uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a 
              href="https://wa.link/skxrhs" 
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded text-xs font-bold flex items-center gap-2 transition-all"
            >
              <MessageCircle size={14} />
              WHATSAPP
            </a>
            <a 
              href="https://escritorio.zyone.com.br/cadastro#?id=onathanoficial&convite=MjA0MDc%3D" 
              className="px-4 py-2 bg-zyone-red hover:bg-zyone-red-dark text-white rounded text-xs font-bold flex items-center gap-2 transition-all"
            >
              <UserPlus size={14} />
              CADASTRE-SE
            </a>
            <a 
              href="https://escritorio.zyone.com.br/cadastro#?id=onathanoficial&convite=MjA0MDc%3D" 
              className="px-4 py-2 bg-zyone-dark hover:bg-black text-white rounded text-xs font-bold flex items-center gap-2 transition-all"
            >
              <LogIn size={14} />
              ESCRITÓRIO
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-zyone-red transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:text-zyone-red transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <a href="https://wa.link/skxrhs" className="block w-full py-3 bg-green-500 text-white rounded font-bold text-sm text-center">WHATSAPP</a>
                <a href="https://escritorio.zyone.com.br/cadastro#?id=onathanoficial&convite=MjA0MDc%3D" className="block w-full py-3 bg-zyone-red text-white rounded font-bold text-sm text-center">CADASTRE-SE</a>
                <a href="https://escritorio.zyone.com.br/cadastro#?id=onathanoficial&convite=MjA0MDc%3D" className="block w-full py-3 bg-zyone-dark text-white rounded font-bold text-sm text-center">ESCRITÓRIO</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
