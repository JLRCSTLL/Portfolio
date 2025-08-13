import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-black">
            RNZ
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
              HOME
            </a>
            <a href="#projects" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
              PROJECTS
            </a>
            <a href="#about" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
              ABOUT
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
              CONTACT
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-600 hover:text-black transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4 pt-4">
              <a 
                href="#home" 
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </a>
              <a 
                href="#projects" 
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                PROJECTS
              </a>
              <a 
                href="#about" 
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </a>
              <a 
                href="#contact" 
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

