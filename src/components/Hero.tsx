
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=3648&auto=format&fit=crop")'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
                <span className="text-white/20">ice</span>
                <br />
                <span className="text-white">land</span>
              </h1>
            </div>
          </div>

          {/* Right Content - Tours Section */}
          <div className="text-white">
            <div className="mb-6">
              <span className="text-6xl md:text-7xl font-light text-white/40">01</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6">DISCOVER TOURS</h2>
            
            <p className="text-white/80 text-base leading-relaxed mb-8 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam.
            </p>

            <button className="group flex items-center space-x-3 bg-transparent border border-white/30 hover:bg-white hover:text-black text-white px-8 py-3 transition-all duration-300">
              <span className="text-sm font-light tracking-wider">VIEW ALL TOURS</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Adventure Text */}
        <div className="absolute bottom-12 right-6 lg:right-12">
          <div className="text-white/60 transform rotate-90 origin-center">
            <span className="text-sm font-light tracking-[0.3em]">ADVENTURE</span>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-6 flex flex-col space-y-3">
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <div className="w-2 h-2 bg-white/40 rounded-full"></div>
        <div className="w-2 h-2 bg-white/40 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
