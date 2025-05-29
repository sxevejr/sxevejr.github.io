
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Create email link
    const emailBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ASubject: ${formData.subject}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:steveowitijr@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${emailBody}`;
    
    // Open email client
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            I'm always excited to take on new challenges and collaborate on interesting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors">
                  <Mail className="text-blue-400" size={20} />
                  <span>steveowitijr@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors">
                  <Phone className="text-purple-400" size={20} />
                  <span>+254 790 920 258</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors">
                  <MapPin className="text-pink-400" size={20} />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors hover:scale-110 transform"
                >
                  <Github className="text-gray-400 hover:text-white" size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors hover:scale-110 transform"
                >
                  <Linkedin className="text-gray-400 hover:text-white" size={20} />
                </a>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <h4 className="text-xl font-semibold text-white mb-4">Why Work With Me?</h4>
              <ul className="space-y-2 text-gray-400">
                <li>• Three years of experience in development and design</li>
                <li>• Strong attention to detail and user experience</li>
                <li>• Quick learner and adaptable to new technologies</li>
                <li>• Collaborative approach and excellent communication</li>
                <li>• Enthusiasm for working with evolving AI tools and contributing to cutting-edge design systems</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 transform flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-slate-700 text-center">
          <p className="text-gray-400">
            © 2024 STEPHEN OWITI. Built with passion using React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
