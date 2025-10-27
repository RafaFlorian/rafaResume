import React from 'react';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start">
      <div className="max-w-3xl">
        <p className="text-lg text-cyan-400 font-mono tracking-wider">INITIATING DATA STREAM...</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-100 my-4 font-orbitron">
          SOURCE: JOHN DOE
        </h1>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-400 font-orbitron">
          I architect data highways for tomorrow.
        </h2>
        <p className="mt-8 max-w-xl text-gray-400 leading-relaxed">
          As a Data Engineer, I design and construct the critical infrastructure that transforms raw, chaotic data into streams of pure insight. My mission is to build systems that are not just powerful, but elegant, scalable, and future-proof.
        </p>
        <div className="mt-12">
          <button 
            onClick={onContactClick}
            className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-cyan-400 transition duration-300 ease-out border-2 border-cyan-400 rounded-sm shadow-md"
          >
            <span className="absolute inset-0 w-full h-full bg-cyan-400 transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:text-[#0A0A1A]">
              Open Connection
            </span>
            <span className="relative">Open Connection</span>
          </button>
        </div>
      </div>
    </section>
  );
};