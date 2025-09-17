import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { contactInfo, socialLinks } from '../data/portfolioData';

const Contact = () => {
  const iconMap = {
    Mail: <Mail size={20} />,
    Phone: <Phone size={20} />,
    MapPin: <MapPin size={20} />,
    Github: <Github size={20} />,
    Linkedin: <Linkedin size={20} />,
    Twitter: <Twitter size={20} />
  };

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Let's Work
                <br />
                Together
              </h2>
              <p className="text-lg text-gray-300 max-w-md">
                Have a project in mind? Let's discuss how we can bring your ideas to life.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors group"
                >
                  <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-red-500 transition-colors">
                    {iconMap[item.icon]}
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider">
                      {item.label}
                    </div>
                    <div className="text-lg">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg text-gray-300 hover:text-white hover:bg-red-500 transition-colors"
                  aria-label={social.platform}
                >
                  {iconMap[social.icon]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

