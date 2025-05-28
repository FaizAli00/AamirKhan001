import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiX } from 'react-icons/fi';
import projectsData from '../../data/projectsData.json';

const Projects = () => {
    const [filter, setFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    // Get all unique categories and add Social Media as a special filter
    const baseCategories = ['all', ...new Set(projectsData.map(project => project.category))];
    const categories = [...baseCategories, 'Social Media'];

    const filteredProjects = filter === 'all' 
        ? projectsData 
        : filter === 'Social Media'
        ? projectsData.filter(project => project.tags?.includes('Social Media'))
        : projectsData.filter(project => project.category === filter);

    const openProject = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeProject = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="projects" className="py-24 relative overflow-hidden bg-[#050505]">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-10 bg-carbon-pattern" />
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

                {/* Filter Buttons with Social Media */}
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
                            className={`px-5 py-2 rounded-full text-sm md:text-base font-medium transition-all flex items-center ${
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
                            {category === 'Social Media' ? (
                                <>
                                    {/* <span className="mr-1">📱</span> */}
                                    Social Media
                                </>
                            ) : (
                                category
                            )}
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
                            animate={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ 
                                y: -5,
                                boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
                            }}
                        >
                            <div className="h-full flex flex-col">
                                <div className="relative h-60 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>

                                <div className="p-5 flex-1 flex flex-col">
                                    <span className="inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full bg-[#cde633] text-dark self-start">
                                        {project.category}
                                    </span>
                                    <h3 className="text-lg font-bold text-gray-100 mb-2">{project.title}</h3>
                                    {project.description && (
                                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                            {project.description}
                                        </p>
                                    )}

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
            {selectedProject && (
                <motion.div 
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div 
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={closeProject}
                    />
                    
                    <motion.div 
                        className="relative max-w-6xl w-full mx-4 my-8 overflow-hidden bg-gray-900 rounded-xl border border-gray-800 max-h-[90vh] flex flex-col"
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

                        <div className="overflow-y-auto flex-1 p-6 md:p-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="lg:col-span-2">
                                    <div className="relative w-full h-80 md:h-[400px] overflow-hidden rounded-lg mb-6">
                                        <img
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <span className="inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full bg-[#cde633] text-dark">
                                        {selectedProject.category}
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{selectedProject.title}</h2>
                                    <p className="text-gray-300 text-lg mb-6">{selectedProject.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {selectedProject.tags?.map(tag => (
                                            <span key={tag} className="text-xs text-gray-300 bg-gray-800/70 px-3 py-1 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {selectedProject.detailedContent?.map((item, index) => (
                                    <div key={index} className={
                                        item.type === 'image' && 
                                        selectedProject.detailedContent.length % 2 !== 0 && 
                                        index === selectedProject.detailedContent.length - 1 
                                            ? 'lg:col-span-2' 
                                            : ''
                                    }>
                                        {item.type === 'text' && (
                                            <div className="prose prose-invert max-w-none">
                                                {item.heading && <h3 className="text-xl md:text-2xl font-semibold text-gray-200 mb-2 mt-4">{item.heading}</h3>}
                                                <p className="text-gray-300 mb-4">{item.content}</p>
                                            </div>
                                        )}
                                        {item.type === 'image' && (
                                            <div className="relative w-full h-60 md:h-80 overflow-hidden rounded-lg">
                                                <img
                                                    src={item.src}
                                                    alt={item.alt}
                                                    className="w-full h-full object-cover"
                                                />
                                                {item.caption && (
                                                    <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-gray-200 text-xs p-2 text-center">
                                                        {item.caption}
                                                    </p>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {selectedProject.link && (
                                <div className="mt-8 text-center">
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-6 py-3 rounded-full bg-[#cde633] text-dark font-semibold text-lg hover:bg-[#e6f170] transition-colors shadow-lg"
                                    >
                                        Visit Live Project
                                        <FiExternalLink className="ml-3 text-xl" />
                                    </a>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}

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