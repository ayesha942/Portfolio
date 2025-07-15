

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const techs = ['React', 'Flutter', 'Node.js', 'GenAI', 'Python', 'Firebase'];
const roles = [
  'Full Stack Developer',
  'QA Engineer',
  'Flutter Developer',
  'MERN Stack Developer',
  'Automation Tester'
];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen w-full px-4 md:px-8 py-20 overflow-x-hidden bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white relative">
      {/* 🔮 Background blobs */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500 opacity-20 blur-3xl rounded-full top-[-100px] left-[-100px] z-0"></div>
      <div className="absolute w-[400px] h-[400px] bg-blue-500 opacity-20 blur-2xl rounded-full bottom-[-100px] right-[-100px] z-0"></div>

      {/* 🪐 Floating tech tags */}
      {techs.map((tech, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            delay: i * 0.3
          }}
          className="absolute text-[10px] md:text-xs px-2 py-1 bg-white/10 text-white rounded-full shadow backdrop-blur border border-white/10"
          style={{
            top: `${30 + Math.sin(i * 60) * 25}%`,
            left: `${40 + Math.cos(i * 60) * 25}%`
          }}
        >
          {tech}
        </motion.div>
      ))}

      {/* 💎 Centered container */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto text-center">
        {/* 🌟 Name */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse drop-shadow-lg"
        >
          Ayesha Munir
        </motion.h1>

        {/* 🔁 Role animation */}
        <motion.p
          key={currentRole}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl mt-4 text-gray-300 font-mono"
        >
          {roles[currentRole]} <span className="text-pink-400 animate-ping ml-1">|</span>
        </motion.p>

        {/* Divider line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '60%' }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mx-auto mt-3 mb-12"
        />

        {/* 🧩 Skills cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* 🛠 Development Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-gray-800/30 rounded-xl border border-indigo-500/20 backdrop-blur shadow-md hover:shadow-indigo-500/10 transition"
          >
            <h3 className="text-2xl font-bold text-indigo-400 mb-4">Development Stack</h3>
            <ul className="text-sm text-gray-300 space-y-2 text-left pl-4">
              <li>▹ Flutter/Dart Mobile Apps</li>
              <li>▹ MERN Stack (React + Node.js)</li>
              <li>▹ Firebase Integration</li>
              <li>▹ REST API Development</li>
            </ul>
          </motion.div>

          {/* 🧪 QA Engineering */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-gray-800/30 rounded-xl border border-purple-500/20 backdrop-blur shadow-md hover:shadow-purple-500/10 transition"
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-4">QA Engineering</h3>
            <h4 className="text-purple-300 font-semibold mb-2">Manual Testing</h4>
            <ul className="text-sm text-gray-300 space-y-1 pl-4 mb-4">
              <li>• Test Case Design</li>
              <li>• Exploratory Testing</li>
              <li>• Bug Reporting</li>
              <li>• Regression Testing</li>
            </ul>
            <h4 className="text-purple-300 font-semibold mb-2">Automation Testing</h4>
            <ul className="text-sm text-gray-300 space-y-1 pl-4">
              <li>• Selenium WebDriver</li>
              <li>• API Testing with Postman</li>
              <li>• JIRA Test Management</li>
              <li>• CI/CD Integration</li>
            </ul>
          </motion.div>
        </div>

        {/* 📝 Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="p-6 bg-gray-900/30 border border-gray-700 backdrop-blur-md rounded-xl text-gray-300 text-sm md:text-base mb-10"
        >
          I develop robust full-stack apps using Flutter and MERN while applying strong QA practices 
          to ensure software quality. My dual capability in development & testing makes me a valuable 
          asset in delivering high-performing and bug-free solutions.
        </motion.div>

        {/* 📄 Download CV */}
        <motion.a
          href="/AyeshaResume.pdf"
          download
          whileHover={{
            scale: 1.05,
            background: 'linear-gradient(to right, #7c3aed, #ec4899)'
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-pink-400/30"
        >
          <FiDownload className="text-lg" />
          Download CV
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
