import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiCode } from 'react-icons/fi';

export default function ExperienceSection() {
  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center text-white mb-12"
      >
        <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
          Professional Experience
        </span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors mx-auto max-w-2xl"
      >
        <div className="flex items-start gap-4">
          <div className="p-2 bg-gray-800 rounded-full">
            <FiBriefcase className="text-blue-400" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Full Stack Developer Intern</h3>
            <p className="text-gray-300 mt-1">entraCloud</p>
            <div className="flex items-center text-gray-400 mt-2">
              <FiCalendar className="mr-2" size={14} />
              <span className="text-sm">Jun 2023 - Aug 2023 | Remote</span>
            </div>
          </div>
        </div>

        <ul className="mt-5 space-y-3 pl-2">
          <li className="flex items-start text-gray-300">
            <span className="text-cyan-400 mr-2">•</span>
            <span>Developed responsive UI components using React and Tailwind CSS</span>
          </li>
          <li className="flex items-start text-gray-300">
            <span className="text-cyan-400 mr-2">•</span>
            <span>Assisted in API integrations and state management</span>
          </li>
          <li className="flex items-start text-gray-300">
            <span className="text-cyan-400 mr-2">•</span>
            <span>Participated in code reviews and agile development processes</span>
          </li>
          <li className="flex items-start text-gray-300">
            <span className="text-cyan-400 mr-2">•</span>
            <span>Documented frontend components and fixed UI bugs</span>
          </li>
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {['React', 'JavaScript', 'Tailwind CSS','Node.js','MongoDb','Git', 'Agile'].map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 border border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center text-gray-400 text-sm mt-12"
      >
        Open to new opportunities to grow my professional experience
      </motion.div>
    </section>
  );
}