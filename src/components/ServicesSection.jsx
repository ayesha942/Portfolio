import React from 'react';
import { motion } from 'framer-motion';
import { FiSmartphone, FiGlobe, FiCheckCircle } from 'react-icons/fi';

const services = [
  {
    title: "Mobile App Development",
    icon: <FiSmartphone className="text-3xl text-blue-400" />,
    description: "Building cross-platform mobile applications with Flutter for iOS and Android. Focus on clean UI, smooth animations, and efficient state management.",
    features: [
      "Flutter/Dart development",
      "Firebase integration",
      "Responsive UI design",
      "API integration",
      "App publishing support"
    ],
    accent: "from-blue-500 to-cyan-500"
  },
  {
    title: "Web Development",
    icon: <FiGlobe className="text-3xl text-purple-400" />,
    description: "Creating responsive, modern web applications using MERN stack (MongoDB, Express, React, Node.js) with focus on performance and UX.",
    features: [
      "React.js frontends",
      "Node.js backends",
      "MongoDB",
      "Express.js",
      "REST API development",
      "Tailwind CSS styling",
      "Responsive design"
    ],
    accent: "from-purple-500 to-pink-500"
  },
  {
    title: "Quality Assurance",
    icon: <FiCheckCircle className="text-3xl text-emerald-400" />,
    description: "Ensuring software quality through manual testing and basic automation. Identifying bugs and improving overall product reliability.",
    features: [
      "Manual testing",
      "Test case creation",
      "Bug reporting",
      "Regression testing",
      "Documentation"
    ],
    accent: "from-emerald-500 to-teal-500"
  }
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`bg-gradient-to-br ${service.accent} bg-opacity-10 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all h-full`}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4 p-3 bg-gray-800 rounded-full w-max">
          {service.icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
        <p className="text-gray-300 mb-4">{service.description}</p>
        
        <ul className="space-y-2 mt-auto">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start text-gray-300">
              <span className="text-emerald-400 mr-2">✓</span>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default function MyServices() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          My <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Services</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Solutions I can help you build with clean code and modern technologies
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center mt-16 text-gray-400"
      >
        <p>Interested in working together? Let's discuss your project requirements!</p>
      </motion.div>
    </section>
  );
}