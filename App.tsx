
import React, { useState, useRef, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { AIAssistant } from './components/AIAssistant';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('origin');
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  const navItems = [
    { id: 'origin', title: 'Origin' },
    { id: 'ingestion', title: 'Ingestion' },
    { id: 'transformation', title: 'Transformation' },
    { id: 'enrichment', title: 'Enrichment' },
    { id: 'insights', title: 'Insights' },
    { id: 'endpoint', title: 'Endpoint' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    const currentSections = sectionsRef.current;

    Object.keys(currentSections).forEach((key) => {
      const section = currentSections[key];
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      Object.keys(currentSections).forEach((key) => {
        const section = currentSections[key];
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    sectionsRef.current[id]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0A0A1A] text-gray-200 min-h-screen">
      {/* Background Animated Grid */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f6,transparent)]"></div>
      </div>
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A1A]/80 backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-orbitron text-2xl font-bold text-cyan-400">JD:/&gt;</div>
          <ul className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`font-orbitron text-sm uppercase tracking-widest transition-colors duration-300 ${activeSection === item.id ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-400'}`}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="relative z-10 container mx-auto px-6">
        <div id="origin" ref={(el) => (sectionsRef.current['origin'] = el)}>
          <Hero onContactClick={() => scrollToSection('endpoint')} />
        </div>
        <div id="ingestion" ref={(el) => (sectionsRef.current['ingestion'] = el)}>
          <About />
        </div>
        <div id="transformation" ref={(el) => (sectionsRef.current['transformation'] = el)}>
          <Skills />
        </div>
        <div id="enrichment" ref={(el) => (sectionsRef.current['enrichment'] = el)}>
          <Projects />
        </div>
        <div id="insights" ref={(el) => (sectionsRef.current['insights'] = el)}>
          <Blog />
        </div>
        <div id="endpoint" ref={(el) => (sectionsRef.current['endpoint'] = el)}>
          <Contact />
        </div>
      </main>

      <AIAssistant />
    </div>
  );
};

export default App;
