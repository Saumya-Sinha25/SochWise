
import React from 'react';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Social Links */}
          <div className="flex items-center space-x-1">
            <span className="text-white/60 text-sm font-light mr-3">FOLLOW US</span>
            <a href="#" className="text-white/60 hover:text-white transition-colors p-2">
              <Instagram size={16} />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors p-2">
              <Twitter size={16} />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors p-2">
              <Facebook size={16} />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors p-2">
              <Youtube size={16} />
            </a>
          </div>

          {/* Main Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white/80 hover:text-white text-sm font-light tracking-wider transition-colors">
              DESTINATIONS
            </a>
            <a href="#" className="text-white/80 hover:text-white text-sm font-light tracking-wider transition-colors">
              DEALS
            </a>
            <a href="#" className="text-white/80 hover:text-white text-sm font-light tracking-wider transition-colors">
              SPECIAL OFFERS
            </a>
            <a href="#" className="text-white/80 hover:text-white text-sm font-light tracking-wider transition-colors">
              ABOUT US
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
