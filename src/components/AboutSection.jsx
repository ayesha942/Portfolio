import React from 'react';

export default function AboutSection() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
      <p className="text-gray-300 text-lg mb-6 leading-relaxed">
        Motivated Software Engineer from FAST with strong interest in MERN, JavaScript, Flutter & GenAI.
        Passionate about building scalable and intelligent applications. Always eager to learn and bring
        impactful digital solutions.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {['React', 'Flutter', 'Python', 'Node.js', 'MongoDB', 'Firebase', 'TailwindCSS', 'GitHub'].map((tech, i) => (
          <span key={i} className="bg-gray-800 text-sm px-4 py-2 rounded-full shadow border border-gray-600">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
