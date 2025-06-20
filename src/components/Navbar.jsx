import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: <FiGithub />, href: "https://github.com/ayesha942" },
    { icon: <FiLinkedin />, href: "https://linkedin.com/in/ayeshamunirp" },
    { icon: <FiMail />, href: "mailto:munirayesha009@gmail.com" }
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex fixed w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 w-full flex justify-between items-center">
          <a 
            href="#home" 
            className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
          >
            Ayesha Munir
          </a>

          <div className="flex items-center gap-8">
            <div className="flex gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            <div className="flex gap-4 ml-6">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:hidden fixed w-full bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-800"
      >
        <div className="px-4 py-3 flex justify-between items-center">
          <a 
            href="#home" 
            className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
          >
            Ayesha Munir
          </a>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 p-2"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="px-4 pb-4 space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-white py-2 border-b border-gray-800"
              >
                {link.name}
              </a>
            ))}

            <div className="flex gap-4 pt-2">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 p-2"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}