import { Code, Palette, Zap } from 'lucide-react';
import { personalInfo, stats, skills } from '../data/portfolioData';

const About = () => {
  const skillIcons = {
    Development: <Code size={24} />,
    Design: <Palette size={24} />,
    Innovation: <Zap size={24} />
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
                About
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                {personalInfo.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-black">{stats.projects}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-black">{stats.experience}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Years</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-black">{stats.passion}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Passion</div>
              </div>
            </div>
          </div>

          {/* Right Content - Skills */}
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex items-start space-x-4 p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <div className="flex-shrink-0 p-3 bg-red-500 text-white rounded-lg group-hover:bg-black transition-colors duration-300">
                    {skillIcons[skill.title]}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {skill.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

