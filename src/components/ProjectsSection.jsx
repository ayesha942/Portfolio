import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'Aamozish - Arabic/Persian Learning Platform (FYP)',
    desc: 'A comprehensive language learning application built with Flutter that combines GPT-powered conversational practice with OCR-based text recognition from images. The platform features personalized learning paths, speech recognition for pronunciation practice, and a gamified reward system to enhance user engagement.',
    tech: ['Flutter', 'Firebase', 'openAi', 'googleCloud', 'OCR'],
    links: [
      { 
        label: 'User App', 
        href: 'https://github.com/ahmadali369/Aamozish',
        icon: <FiGithub className="inline mr-1" />
      },
      { 
        label: 'Admin Panel', 
        href: 'https://github.com/ahmadali369/ArabicPersianLearnAdmin',
        icon: <FiGithub className="inline mr-1" />
      },
    ],
    accentColor: "from-emerald-500 to-teal-600"
  },
  {
    title: 'Urdu GPT Chatbot with Gemini 1.5 Flash',
    desc: 'A command-line interface chatbot specialized in understanding and responding in Urdu. Leverages Google\'s Gemini 1.5 Flash model for contextual understanding of South Asian cultural references. Features include conversation history, sentiment analysis, and the ability to explain complex concepts in simple Urdu.',
    tech: ['Python', 'Gemini API', 'Urdu NLP'],
    links: [
      { 
        label: 'Source Code', 
        href: 'https://github.com/ayesha942/Urdu-GPT-Chatbot',
        icon: <FiGithub className="inline mr-1" />
      },
    ],
    accentColor: "from-amber-500 to-orange-600"
  },
  {
    title: 'Islamic Urdu Knowledge Assistant',
    desc: 'An AI-powered mobile application that provides authentic Islamic knowledge in Urdu. Features include a question-answering system based on Quran and Hadith, personalized dua generator, prayer time notifications with Qibla direction, and a digital rosary counter. Uses fine-tuned language models for culturally appropriate responses.',
    tech: ['Python', 'Gemini', 'Streamlit'],
    links: [
      { 
        label: 'GitHub Repo', 
        href: 'https://github.com/ayesha942/Islamic-Urdu-Knowledge-Assistant',
        icon: <FiGithub className="inline mr-1" />
      }
    ],
    accentColor: "from-blue-500 to-indigo-600"
  },
  {
  title: 'Job Listing Aggregator (Microservices Architecture)',
  desc: 'A scalable job listing aggregator that scrapes job data using Selenium and serves data through a Flask backend in a microservices architecture. The ReactJS frontend displays jobs from multiple sources including JobActuary. Each service is containerized for modular deployment.',
  tech: ['ReactJS', 'Flask', 'Selenium', 'Microservices', 'Docker'],
  links: [
    {
      label: 'GitHub Repo',
      href: 'https://github.com/ayesha942/JobListingApp.git',
      icon: <FiGithub className="inline mr-1" />
    }
  ],
  accentColor: "from-fuchsia-500 to-rose-600"
},
{
  title: 'AI Resume Scanner with Prompt Engineering',
  desc: 'An intelligent resume screening system where users upload their resumes and receive an analysis based on job relevance. Utilizes NLP techniques and prompt engineering with a Flask backend and ReactJS frontend. Extracts, parses, and scores resumes against ideal job criteria.',
  tech: ['ReactJS', 'Flask', 'NLP', 'Prompt Engineering'],
  links: [
    {
      label: 'GitHub Repo',
      href: 'https://github.com/ayesha942/AI-Resume-Scanner-.git',
      icon: <FiGithub className="inline mr-1" />
    }
  ],
  accentColor: "from-cyan-500 to-sky-600"
},
  {
    title: 'Arabic Poem Encyclopedia',
    desc: 'A Java desktop application for scholars and enthusiasts to explore classical Arabic poetry. Includes features like poetic meter analysis, rhyme scheme detection, poet biographies, and a sophisticated search system that can find poems by partial verses or themes. The database contains over 5,000 poems from different Islamic eras.',
    tech: ['Java', 'MySQL','MVC'],
    links: [
      { 
        label: 'Source Code', 
        href: 'https://github.com/psdcoderr/SCD-Project-zzzvariationssss-afk',
        icon: <FiGithub className="inline mr-1" />
      },
      
    ],
    accentColor: "from-purple-500 to-pink-600"
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative group overflow-hidden rounded-xl shadow-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${project.accentColor} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
      
      <div className="relative z-10 p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        
        <p className="text-gray-300 mb-4 leading-relaxed">{project.desc}</p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((tech, i) => (
            <span 
              key={i}
              className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800 text-gray-300 border border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-3">
          {project.links.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium ${
                i === 0 ? 
                `bg-gradient-to-r ${project.accentColor} text-white` : 
                'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {link.icon}
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-16 text-center text-white"
      >
        My <span className="bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">Projects</span>
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <a
          href="https://github.com/ayesha942"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 border border-gray-700 rounded-full text-gray-300 hover:text-white hover:border-purple-500 transition-all group"
        >
          <span>View All Projects on GitHub</span>
          <svg 
            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </motion.div>
    </section>
  );
}