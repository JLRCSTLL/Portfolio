import { Award, Calendar, ExternalLink } from 'lucide-react';
import { certificates } from '../data/portfolioData';

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-4">
            Certificates
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Professional certifications and achievements that validate my expertise 
            and commitment to continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div key={cert.id} className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-red-500 transition-all duration-300">
              {/* Certificate Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-red-500 text-white rounded-lg group-hover:bg-black transition-colors duration-300">
                  <Award size={24} />
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar size={16} className="mr-1" />
                  {cert.date}
                </div>
              </div>

              {/* Certificate Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-red-500 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 font-medium">
                    {cert.issuer}
                  </p>
                </div>

                <p className="text-gray-600 text-sm">
                  {cert.description}
                </p>

                {/* Credential ID */}
                {cert.credentialId && (
                  <div className="text-xs text-gray-500 font-mono bg-gray-50 px-3 py-2 rounded">
                    ID: {cert.credentialId}
                  </div>
                )}

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full group-hover:bg-red-50 group-hover:text-red-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Verify Button */}
                <a 
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-4 flex items-center justify-center space-x-2 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:border-red-500 hover:text-red-500 transition-colors group-hover:border-red-500 group-hover:text-red-500"
                >
                  <ExternalLink size={16} />
                  <span className="text-sm font-medium">Verify Certificate</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-600">
            <Award size={20} className="text-red-500" />
            <span>Continuously expanding knowledge and earning new certifications</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;

