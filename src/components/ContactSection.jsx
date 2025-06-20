import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';

const contacts = [
  {
    name: "Email",
    value: "munirayesha009@gmail.com",
    icon: <FiMail className="text-2xl" />,
    href: "mailto:munirayesha009@gmail.com",
    color: "text-red-400 hover:text-red-300"
  },
  {
    name: "LinkedIn",
    value: "ayeshamunirp",
    icon: <FiLinkedin className="text-2xl" />,
    href: "https://www.linkedin.com/in/ayeshamunirp",
    color: "text-blue-400 hover:text-blue-300"
  },
  {
    name: "GitHub",
    value: "ayesha942",
    icon: <FiGithub className="text-2xl" />,
    href: "https://github.com/ayesha942",
    color: "text-purple-400 hover:text-purple-300"
  },
];

const ContactCard = ({ contact, index }) => {
  return (
    <motion.a
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      href={contact.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex flex-col items-center p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 ${contact.color} bg-gray-900/50 hover:bg-gray-800/30`}
      whileHover={{ y: -5 }}
    >
      <div className="mb-4 p-3 rounded-full bg-gray-800">
        {contact.icon}
      </div>
      <h3 className="text-lg font-semibold">{contact.name}</h3>
      <p className="text-sm mt-1 text-gray-400">{contact.value}</p>
    </motion.a>
  );
};

export default function ContactSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          Let's <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Connect</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Whether you have a project in mind or just want to chat about tech, I'd love to hear from you!
        </p>
      </motion.div>
      
      {/* Centered 3-column grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto">
        {contacts.map((contact, i) => (
          <ContactCard key={i} contact={contact} index={i} />
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700 max-w-3xl mx-auto"
      >
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
          <FiSend className="mr-3 text-cyan-400" />
          Send me a message
        </h3>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div whileFocus={{ scale: 1.02 }}>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
              />
            </motion.div>
            <motion.div whileFocus={{ scale: 1.02 }}>
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
              />
            </motion.div>
          </div>
          
          <motion.div whileFocus={{ scale: 1.02 }}>
            <input 
              type="text" 
              placeholder="Subject" 
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
            />
          </motion.div>
          
          <motion.div whileFocus={{ scale: 1.02 }}>
            <textarea 
              placeholder="Your Message" 
              rows="5"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
            ></textarea>
          </motion.div>
          
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg"
            >
              Send Message
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}