import React from 'react';

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
}

export interface ChatMessage {
  id: number;
  role: 'user' | 'model';
  text: string;
}

export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}
