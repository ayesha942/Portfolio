import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import ServicesSection from './components/ServicesSection';
import './index.css';

export default function App() {
  return (
    <main className="bg-black text-white font-sans scroll-smooth">
      <div className="bg-gray-900 text-white">
        <Navbar />
        <section id="home"><HeroSection /></section>
        <section id="projects"><ProjectsSection /></section>
        <section id="experience"><ExperienceSection /></section>
        <section id="services"><ServicesSection /></section>
        <section id="contact"><ContactSection /></section>
      </div>
    </main>
  );
}