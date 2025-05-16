import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const Projects = () => {
    const projects = [
        {
          id: 1,
          title: 'Brand Identity Design',
          category: 'Branding',
          image: '/projects/brand1.jpg',
          link: '#'
        },
        {
          id: 2,
          title: 'Logo Design',
          category: 'Logo',
          image: '/projects/logo1.jpg',
          link: '#'
        },
        {
          id: 3,
          title: 'Educational Portfolio Design',
          category: 'Print',
          image: '/projects/edu1.jpg',
          link: '#'
        },
        {
          id: 4,
          title: 'Business Card Design',
          category: 'Card',
          image: '/projects/card1.jpg',
          link: '#'
        },
        {
          id: 5,
          title: 'Broucher Design',
          category: 'Broucher',
          image: '/projects/project11.jpg',
          link: '#'
        },
        {
          id: 6,
          title: 'Adds Design',
          category: 'Adds',
          image: '/projects/project12.jpg',
          link: '#'
        },
      ];

  const [filter, setFilter] = useState('all');
  const categories = ['all', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section 
      id="projects" 
      className="py-24 relative overflow-hidden bg-[#050505]"
    >
      {/* Carbon fiber texture */}
      <div className="absolute inset-0 opacity-10 bg-carbon-pattern" />
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-radial-vignette" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            My Recent Projects
          </h2>
          <div className="w-24 h-1 bg-[#cde633] mx-auto mb-6 rounded-full" />
          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            Selected works demonstrating creative problem-solving and aesthetic excellence
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {categories.map(category => (
            <motion.button
              key={category}
              className={`px-5 py-2 rounded-full text-sm md:text-base font-medium transition-all ${
                filter === category
                  ? 'bg-[#cde633] text-dark shadow-lg shadow-primary/30'
                  : 'bg-gray-900 text-gray-300 hover:text-gray-100 border border-gray-800 hover:border-gray-700'
              }`}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative rounded-xl overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
              }}
            >
              {/* Card Content */}
              <div className="h-full flex flex-col">
                {/* Image Container */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Text Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full bg-[#cde633] text-dark self-start">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-100 mb-2">{project.title}</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                    {project.tags?.map(tag => (
                      <span key={tag} className="text-xs text-gray-300 bg-gray-800/70 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href={project.link}
                    className="mt-auto inline-flex items-center text-primary hover:text-secondary group text-sm font-medium"
                    whileHover={{ x: 3 }}
                  >
                    View Project
                    <FiExternalLink className="ml-2 group-hover:rotate-45 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gray-700 rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.6, 0.1],
              y: [0, (Math.random() * 20) - 10]
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;