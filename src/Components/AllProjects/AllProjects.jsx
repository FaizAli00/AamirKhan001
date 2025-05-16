import React from 'react';

const AllProjects = () => {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
    //   title: "Coffee Shop",
      description: "At Aamir khan Design Studio, we specialize in crafting unique brand identities and engaging social media designs that resonate with your audience. Our personalized approach ensures that your brand stands out in today's competitive landscape while maintaining authenticity and relevance.",
      imageUrl: "/projects/project1.png",
    },
    {
      id: 2,
    //   title: "Task Management App",
    //   description: "A productivity application for organizing tasks with drag-and-drop functionality.",
      imageUrl: "/projects/project2.png",
    },
    {
      id: 3,
    //   title: "Weather Dashboard",
    //   description: "Real-time weather information with 5-day forecasts and location search.",
      imageUrl: "/projects/project3.png",
    },
    // Add more projects as needed
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800" id="all-projects">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Brand Identity Design
        </h2>
        
        <div className="space-y-12">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className=" rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>
                <div className="overflow-hidden rounded">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;