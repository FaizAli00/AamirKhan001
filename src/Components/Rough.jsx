  import { useState } from 'react';
  import { motion, AnimatePresence } from 'framer-motion';
  import { FiExternalLink, FiX } from 'react-icons/fi';

  const Projects = () => {
      const projects = [
          {
            id: 1,
            title: 'Brand Identity Design',
            category: 'Branding',
            category2: 'Branding',
            title2: 'Zenith Branding Design',
            // title3: 'Zenith Branding Design',
            image: '/projects/brand1.jpg',
            image2: '/projects/brand2.jpg',
            link: '#',
            link2: '#',
            description: 'Comprehensive brand identity design including logo, color palette, and typography for a modern startup.',
            details: 'This project involved creating a complete visual identity for a tech startup. The process included market research, competitor analysis, and multiple design iterations to arrive at the final solution that perfectly represents the brand values.',
            description2: 'Comprehensive brand identity design including logo, color palette, and typography for a modern startup.',
            details2: 'This project involved creating a complete visual identity for a tech startup. The process included market research, competitor analysis, and multiple design iterations to arrive at the final solution that perfectly represents the brand values.'
          },
          {
            id: 2,
            title: 'Logo Design',
            category: 'Logo',
            image: '/projects/logo1.jpg',
            link: '#',
            description: 'Minimalist logo design for a creative agency.',
            details: 'The logo was designed to represent the agency\'s focus on simplicity and creativity. The geometric shapes form an abstract representation of their core values.'
          },
          {
            id: 3,
            title: 'Educational Portfolio Design',
            category: 'Print',
            image: '/projects/edu1.jpg',
            link: '#',
            description: 'Print design for an educational institution\'s portfolio.',
            details: 'This printed portfolio showcases the institution\'s programs and achievements. The clean layout and organized information architecture make it easy to navigate.'
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
    const [selectedProject, setSelectedProject] = useState(null);
    const categories = ['all', ...new Set(projects.map(project => project.category))];
    
    const filteredProjects = filter === 'all' 
      ? projects 
      : projects.filter(project => project.category === filter);

    const openProject = (project) => {
      setSelectedProject(project);
      // Disable scrolling when project is open
      document.body.style.overflow = 'hidden';
    };

    const closeProject = () => {
      setSelectedProject(null);
      // Re-enable scrolling
      document.body.style.overflow = 'auto';
    };

    


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

                    <motion.button
                      onClick={() => openProject(project)}
                      
                      className="mt-auto inline-flex items-center text-[#cde633] hover:text-[#e6f170] group text-sm font-medium"
                      whileHover={{ x: 3 }}
                    >
                      View Project
                      <FiExternalLink className="ml-2 group-hover:rotate-45 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
      <motion.div 
  className="fixed inset-0 z-50 flex items-center justify-center"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.3 }}
>
  {/* Overlay */}
  <div 
    className="fixed inset-0 bg-black/80 backdrop-blur-sm"
    onClick={closeProject}
  />
  
  {/* Modal Content */}
  <motion.div 
    className="relative max-w-6xl w-full mx-4 my-8 overflow-hidden bg-gray-900 rounded-xl border border-gray-800 max-h-[70vh] flex flex-col"
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0.9, opacity: 0 }}
    transition={{ type: 'spring', damping: 25 }}
  >
    <button 
      onClick={closeProject}
      className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
    >
      <FiX className="text-xl" />
    </button>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-y-auto flex-1">
      {/* Project Image - Fixed height */}
      <div className="relative h-full min-h-[300px] lg:min-h-[400px]">
        <img
          src={selectedProject.image}
          alt={selectedProject.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Project Details - Scrollable content */}
      <div className="p-6 md:p-8 overflow-y-auto">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-[#cde633] text-dark">
          {selectedProject.category}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>
        
        <p className="text-gray-300 mb-6">{selectedProject.description}</p>
        
        {/* Scrollable content container */}
        <div className="space-y-4 pr-2">
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300">{selectedProject.details}</p>
          </div>
          
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {selectedProject.tags?.map(tag => (
            <span key={tag} className="text-xs text-gray-300 bg-gray-800/70 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
           <div className="relative h-full min-h-[300px] lg:min-h-[400px]">
        <img
          src={selectedProject.image2}
          alt={selectedProject.title2}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Project Details - Scrollable content */}
      <div className="p-6 md:p-8 overflow-y-auto">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-[#cde633] text-dark">
          {selectedProject.category2}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{selectedProject.title2}</h2>
        
        <p className="text-gray-300 mb-6">{selectedProject.description2}</p>
        
        {/* Scrollable content container */}
        <div className="space-y-4 pr-2">
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300">{selectedProject.details2}</p>
          </div>
          
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {selectedProject.tags?.map(tag => (
            <span key={tag} className="text-xs text-gray-300 bg-gray-800/70 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="relative h-full min-h-[300px] lg:min-h-[400px]">
        <img
          src={selectedProject.image2}
          alt={selectedProject.title2}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Project Details - Scrollable content */}
      <div className="p-6 md:p-8 overflow-y-auto">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-[#cde633] text-dark">
          {selectedProject.category2}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{selectedProject.title2}</h2>
        
        <p className="text-gray-300 mb-6">{selectedProject.description2}</p>
        
        {/* Scrollable content container */}
        <div className="space-y-4 pr-2">
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300">{selectedProject.details2}</p>
          </div>
          
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {selectedProject.tags?.map(tag => (
            <span key={tag} className="text-xs text-gray-300 bg-gray-800/70 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>


      <div className="relative h-full min-h-[300px] lg:min-h-[400px]">
        <img
          src={selectedProject.image2}
          alt={selectedProject.title2}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Project Details - Scrollable content */}
      <div className="p-6 md:p-8 overflow-y-auto">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-[#cde633] text-dark">
          {selectedProject.category2}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{selectedProject.title2}</h2>
        
        <p className="text-gray-300 mb-6">{selectedProject.description2}</p>
        
        {/* Scrollable content container */}
        <div className="space-y-4 pr-2">
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300">{selectedProject.details2}</p>
          </div>
          
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {selectedProject.tags?.map(tag => (
            <span key={tag} className="text-xs text-gray-300 bg-gray-800/70 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="relative h-full min-h-[300px] lg:min-h-[400px]">
        <img
          src={selectedProject.image2}
          alt={selectedProject.title2}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Project Details - Scrollable content */}
      <div className="p-6 md:p-8 overflow-y-auto">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-[#cde633] text-dark">
          {selectedProject.category2}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{selectedProject.title2}</h2>
        
        <p className="text-gray-300 mb-6">{selectedProject.description2}</p>
        
        {/* Scrollable content container */}
        <div className="space-y-4 pr-2">
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300">{selectedProject.details2}</p>
          </div>
          
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {selectedProject.tags?.map(tag => (
            <span key={tag} className="text-xs text-gray-300 bg-gray-800/70 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="relative h-full min-h-[300px] lg:min-h-[400px]">
        <img
          src={selectedProject.image2}
          alt={selectedProject.title2}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Project Details - Scrollable content */}
      <div className="p-6 md:p-8 overflow-y-auto">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-[#cde633] text-dark">
          {selectedProject.category2}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{selectedProject.title2}</h2>
        
        <p className="text-gray-300 mb-6">{selectedProject.description2}</p>
        
        {/* Scrollable content container */}
        <div className="space-y-4 pr-2">
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300">{selectedProject.details2}</p>
          </div>
          
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {selectedProject.tags?.map(tag => (
            <span key={tag} className="text-xs text-gray-300 bg-gray-800/70 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      

    </div>

    
    
  </motion.div>
</motion.div>
          )}
        </AnimatePresence>

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