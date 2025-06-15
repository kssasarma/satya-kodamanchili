import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import aboutData from '../data/about.json';

interface HeaderProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
}

const Header = ({ activeSection, onNavClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    onNavClick(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0">
            <button 
              onClick={() => handleNavClick('home')}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              {aboutData.name}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <button onClick={() => handleNavClick('about')} className={`text-gray-600 hover:text-blue-600 ${activeSection === 'about' ? 'text-blue-600' : ''}`}>About</button>
            <button onClick={() => handleNavClick('experience')} className={`text-gray-600 hover:text-blue-600 ${activeSection === 'experience' ? 'text-blue-600' : ''}`}>Experience</button>
            <button onClick={() => handleNavClick('skills')} className={`text-gray-600 hover:text-blue-600 ${activeSection === 'skills' ? 'text-blue-600' : ''}`}>Skills</button>
            <button onClick={() => handleNavClick('portfolio')} className={`text-gray-600 hover:text-blue-600 ${activeSection === 'portfolio' ? 'text-blue-600' : ''}`}>Portfolio</button>
            <button onClick={() => handleNavClick('contact')} className={`text-gray-600 hover:text-blue-600 ${activeSection === 'contact' ? 'text-blue-600' : ''}`}>Contact</button>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <button onClick={() => handleNavClick('about')} className={`block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 ${activeSection === 'about' ? 'text-blue-600' : ''}`}>About</button>
              <button onClick={() => handleNavClick('experience')} className={`block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 ${activeSection === 'experience' ? 'text-blue-600' : ''}`}>Experience</button>
              <button onClick={() => handleNavClick('skills')} className={`block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 ${activeSection === 'skills' ? 'text-blue-600' : ''}`}>Skills</button>
              <button onClick={() => handleNavClick('portfolio')} className={`block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 ${activeSection === 'portfolio' ? 'text-blue-600' : ''}`}>Portfolio</button>
              <button onClick={() => handleNavClick('contact')} className={`block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 ${activeSection === 'contact' ? 'text-blue-600' : ''}`}>Contact</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
