import React from 'react';
import type { BlogPost } from '../types';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl font-bold text-gray-100 mb-12 font-orbitron flex items-center">
    <span className="text-cyan-400 font-mono text-2xl mr-4">04.</span>
    {children}
    <span className="flex-grow h-px bg-gray-700 ml-6"></span>
  </h2>
);

const posts: BlogPost[] = [
  {
    title: 'The Art of Scalable Data Pipelines',
    date: '2024-07-15',
    excerpt: 'A deep dive into the architectural principles and best practices for building data systems that can grow with your business, not against it.',
    tags: ['Architecture', 'Best Practices', 'Scalability'],
  },
  {
    title: 'From Batch to Real-Time: A Paradigm Shift',
    date: '2024-06-28',
    excerpt: 'A case study on the challenges and rewards of transitioning a traditional batch-processing analytics platform to a low-latency, real-time streaming solution.',
    tags: ['Streaming', 'Case Study', 'Kafka', 'Spark'],
  },
  {
    title: 'Data Quality as a First-Class Citizen',
    date: '2024-05-10',
    excerpt: 'Exploring practical strategies and tools for implementing robust data validation, monitoring, and alerting to ensure data reliability across the organization.',
    tags: ['Data Quality', 'Testing', 'Observability'],
  },
];

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <div className="group relative flex flex-col h-full bg-gray-900/50 p-6 rounded-sm border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-2">
    <div className="flex-grow">
        <p className="font-mono text-sm text-gray-500 mb-2">{post.date}</p>
      <h3 className="text-xl font-bold text-gray-200 group-hover:text-cyan-400 transition-colors duration-300 mb-3 font-orbitron">{post.title}</h3>
      <p className="text-gray-400 leading-relaxed">{post.excerpt}</p>
    </div>
    <div className="mt-6 flex flex-wrap gap-2">
      {post.tags.map(tag => (
        <span key={tag} className="text-xs font-mono text-cyan-400 bg-cyan-900/50 px-2 py-1 rounded-sm">{tag}</span>
      ))}
    </div>
  </div>
);

export const Blog: React.FC = () => {
  return (
    <section className="py-24">
      <SectionTitle>STREAM INSIGHTS: DATA LOGS</SectionTitle>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
        {posts.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
         <div className="lg:col-span-2 flex justify-center items-center text-center p-6 bg-gray-900/50 border border-dashed border-gray-700 rounded-sm">
            <p className="text-gray-500">More insights flowing soon...</p>
        </div>
      </div>
    </section>
  );
};