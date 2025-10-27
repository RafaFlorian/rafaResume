import React from 'react';
import type { Project } from '../types';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl font-bold text-gray-100 mb-12 font-orbitron flex items-center">
    <span className="text-cyan-400 font-mono text-2xl mr-4">03.</span>
    {children}
    <span className="flex-grow h-px bg-gray-700 ml-6"></span>
  </h2>
);

const projects: Project[] = [
  {
    title: 'Real-Time Analytics Pipeline',
    description: 'Developed a high-throughput, low-latency streaming pipeline to process user interaction data, enabling real-time dashboarding and anomaly detection.',
    tags: ['Kafka', 'Spark Streaming', 'AWS Kinesis', 'Redshift'],
  },
  {
    title: 'Cloud Data Warehouse Migration',
    description: 'Led the migration of a 10TB on-premise SQL Server data warehouse to Google BigQuery, reducing query times by 90% and cutting operational costs.',
    tags: ['GCP', 'BigQuery', 'Dataflow', 'Python', 'SQL'],
  },
  {
    title: 'Datalake Architecture on AWS',
    description: 'Designed and built a scalable data lake using AWS S3 and Glue, creating a single source of truth for raw and processed data for the entire organization.',
    tags: ['AWS', 'S3', 'Glue', 'Athena', 'Terraform'],
  },
  {
    title: 'Workflow Orchestration Modernization',
    description: 'Modernized legacy cron-based ETL jobs by implementing a robust workflow orchestration system using Apache Airflow, improving reliability and observability.',
    tags: ['Airflow', 'Docker', 'Kubernetes', 'Python'],
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="group relative flex flex-col h-full bg-gray-900/50 p-6 rounded-sm border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-2">
    <div className="flex-grow">
      <h3 className="text-xl font-bold text-gray-200 group-hover:text-cyan-400 transition-colors duration-300 mb-3 font-orbitron">{project.title}</h3>
      <p className="text-gray-400 leading-relaxed">{project.description}</p>
    </div>
    <div className="mt-6 flex flex-wrap gap-2">
      {project.tags.map(tag => (
        <span key={tag} className="text-xs font-mono text-cyan-400 bg-cyan-900/50 px-2 py-1 rounded-sm">{tag}</span>
      ))}
    </div>
  </div>
);

export const Projects: React.FC = () => {
  return (
    <section className="py-24">
      <SectionTitle>ENRICHMENT PIPELINES: CASE STUDIES</SectionTitle>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};