import React from 'react';
import type { Skill } from '../types';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl font-bold text-gray-100 mb-12 font-orbitron flex items-center">
    <span className="text-cyan-400 font-mono text-2xl mr-4">02.</span>
    {children}
    <span className="flex-grow h-px bg-gray-700 ml-6"></span>
  </h2>
);

const PythonIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13.83 8.33c-.28.3-.43.71-.34 1.12l1.35 6.42c.1.47.54.83 1.04.83h1.3c.69 0 1.13-.75.83-1.34l-2.42-4.57c-.2-.37-.15-.84.11-1.16l3.52-4.17c.4-.47.2-.95-.36-1.1-1.39-.37-3.23-.3-4.5.34a2.08 2.08 0 0 0-1 .99l-1.9 3.14z"/><path d="M10.17 15.67c.28-.3.43-.71.34-1.12l-1.35-6.42c-.1-.47-.54-.83-1.04-.83h-1.3c-.69 0-1.13.75-.83 1.34l2.42 4.57c.2.37.15.84-.11 1.16l-3.52 4.17c-.4.47-.2.95.36 1.1 1.39.37 3.23.3 4.5-.34a2.08 2.08 0 0 0 1-.99l1.9-3.14z"/></svg>;
const DatabaseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>;
const CloudIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>;
const SparkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>;
const DockerIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19H2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2zM9 13H5v-2h4v2zM15 13h-4v-2h4v2zM10 5h4"></path></svg>;
const AirflowIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a10 10 0 0 1-3.95-19.14L12 6l3.95-3.14A10 10 0 0 1 12 22z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><circle cx="12" cy="12" r="10"/></svg>;


const skills: Skill[] = [
  { name: 'Python', icon: <PythonIcon /> },
  { name: 'SQL', icon: <DatabaseIcon /> },
  { name: 'Apache Spark', icon: <SparkIcon /> },
  { name: 'AWS (S3, Glue, Redshift)', icon: <CloudIcon /> },
  { name: 'GCP (BigQuery, Dataflow)', icon: <CloudIcon /> },
  { name: 'Docker & Kubernetes', icon: <DockerIcon /> },
  { name: 'Airflow', icon: <AirflowIcon /> },
];

export const Skills: React.FC = () => {
  return (
    <section className="py-24">
      <SectionTitle>TRANSFORMATION ENGINE: MY TECH STACK</SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div 
            key={skill.name}
            className="group relative bg-gray-900/50 p-6 rounded-sm border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-1"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex flex-col items-center justify-center text-center space-y-4">
              {skill.icon}
              <p className="font-semibold text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};