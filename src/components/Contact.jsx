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

          {/* Right Content - Contact Form */}
          <div className="bg-gray-900 rounded-lg p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <Button 
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

