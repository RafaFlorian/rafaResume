
import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl font-bold text-gray-100 mb-8 font-orbitron flex items-center">
    <span className="text-cyan-400 font-mono text-2xl mr-4">01.</span>
    {children}
    <span className="flex-grow h-px bg-gray-700 ml-6"></span>
  </h2>
);

export const About: React.FC = () => {
  return (
    <section className="py-24">
      <SectionTitle>INGESTION: MY CORE LOGIC</SectionTitle>
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-3 text-gray-400 space-y-4 leading-relaxed">
          <p>
            Every great data pipeline begins with a question. My journey started with a fascination for how disconnected bits of information could be collected, structured, and transformed into a powerful current of knowledge. I don't just see data; I see potential.
          </p>
          <p>
            My process begins with deep ingestion—of project requirements, of complex business logic, of the very nature of the data itself. I thrive on understanding the 'why' behind the data points, which allows me to architect systems that are not just technically sound, but contextually aware.
          </p>
          <p>
            This foundational stage is about more than just moving bytes. It's about establishing a clean, reliable source of truth that fuels every subsequent step of the journey towards insight.
          </p>
        </div>
        <div className="md:col-span-2 flex justify-center items-center">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 border-2 border-cyan-400 rounded-sm transform rotate-6 transition-transform duration-300 hover:rotate-3"></div>
            <img 
              src="https://picsum.photos/seed/dataportrait/400/400" 
              alt="John Doe"
              className="relative w-full h-full object-cover rounded-sm filter grayscale hover:filter-none transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
