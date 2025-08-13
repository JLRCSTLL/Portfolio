import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-4">
            Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            A selection of recent work showcasing my skills in web development, 
            design, and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-400 mb-2">{project.title.split(' ')[0]}</div>
                    <div className="text-sm text-gray-500">Project Details</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a 
                    href={project.liveUrl}
                    className="p-3 bg-white rounded-full text-black hover:bg-gray-100 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="p-3 bg-white rounded-full text-black hover:bg-gray-100 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
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

