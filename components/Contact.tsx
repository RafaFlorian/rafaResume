
import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl font-bold text-gray-100 mb-8 font-orbitron flex items-center">
    <span className="text-cyan-400 font-mono text-2xl mr-4">05.</span>
    {children}
    <span className="flex-grow h-px bg-gray-700 ml-6"></span>
  </h2>
);

const GithubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;
const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;

export const Contact: React.FC = () => {
  return (
    <section className="py-24 text-center max-w-2xl mx-auto">
      <SectionTitle>ENDPOINT: CONNECT &amp; TRANSMIT</SectionTitle>
      <h3 className="font-orbitron text-4xl font-bold text-gray-100 mb-4">Connection Open</h3>
      <p className="text-gray-400 mb-8">
        My stream is ready for new data. Whether you have a project, a question, or a new challenge, I am actively seeking opportunities to build innovative data solutions. Transmit your message, and let's create something powerful together.
      </p>
      <a 
        href="mailto:johndoe.data@email.com"
        className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-cyan-400 transition duration-300 ease-out border-2 border-cyan-400 rounded-sm shadow-md"
      >
        <span className="absolute inset-0 w-full h-full bg-cyan-400 transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
        <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:text-[#0A0A1A]">
          Transmit Message
        </span>
        <span className="relative">Transmit Message</span>
      </a>
      <div className="flex justify-center space-x-6 mt-16">
        <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors duration-300"><GithubIcon /></a>
        <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors duration-300"><LinkedinIcon /></a>
      </div>
    </section>
  );
};
