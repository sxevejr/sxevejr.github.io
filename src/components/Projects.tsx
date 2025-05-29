
import { ExternalLink, Globe, Palette, Lock } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'RnLilly Cares Foundation',
      description: 'A comprehensive website for RnLilly Cares Foundation featuring donation systems, volunteer registration, impact tracking, and event management. The platform showcases the foundation\'s mission to support community wellness and provides seamless tools for donors and volunteers to get involved.',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop',
      technologies: ['HTML', 'CSS', 'Java Script'],
      demoLink: 'https://rnlillycares.org',
      type: 'Web Development',
      icon: Globe
    },
    {
      title: 'Integrated Holistic Care Platform',
      description: 'A comprehensive platform for Integrated Holistic Care that connects families with qualified holistic caregivers. Features include caregiver profiles, appointment scheduling, wellness assessments, and secure communication tools for coordinated holistic health management.',
      image: '/caregivers.jpg',
      technologies: ['PHP', 'HTML', 'Python', 'CSS','Node.js'],
      demoLink: 'https://integratedholisticcare.org',
      type: 'Web Development',
      icon: Globe
    },
    {
      title: 'Brand Identity Design',
      description: 'Complete brand identity design for a tech startup, including logo design, color palette, typography, and brand guidelines. Created a cohesive visual identity that reflects innovation and professionalism across all digital and print materials.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      technologies: ['Figma', 'Adobe Illustrator', 'Photoshop', 'InDesign'],
      demoLink: '#',
      type: 'UI/UX Design',
      icon: Palette
    },
    {
      title: 'Enterprise Mobile App UI',
      description: 'Modern mobile app interface design with user-centered approach, featuring intuitive navigation and engaging visual elements. Designed comprehensive user flows, wireframes, and high-fidelity prototypes for enhanced user experience.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      technologies: ['Figma', 'Sketch', 'Principle', 'Adobe XD'],
      demoLink: '#',
      type: 'UI/UX Design',
      icon: Palette,
      isNDA: true
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in development and design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105 transform group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.isNDA ? (
                    <div className="p-2 bg-red-500 rounded-full">
                      <Lock size={16} className="text-white" />
                    </div>
                  ) : (
                    <a
                      href={project.demoLink}
                      className="p-2 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
                    >
                      <ExternalLink size={16} className="text-white" />
                    </a>
                  )}
                </div>
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-2 bg-slate-900/80 rounded-full px-3 py-1">
                    <project.icon size={14} className="text-blue-400" />
                    <span className="text-xs text-gray-300">{project.type}</span>
                    {project.isNDA && (
                      <span className="text-xs text-red-400 ml-2">NDA</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-xs hover:bg-slate-600 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
