
import { ChevronDown, Github, Linkedin, Mail, User } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <div className="animate-fade-in">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-gradient-to-r from-blue-400 to-purple-400 shadow-2xl hover:scale-105 transition-transform duration-300">
              <AvatarImage 
                src="/profile.jpg" 
                alt="STEVE OWITI"
                className="object-cover"
              />
              <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-2xl md:text-3xl font-bold">
                <User size={48} />
              </AvatarFallback>
            </Avatar>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            STEVE OWITI
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-8 space-y-2">
            <p className="animate-fade-in delay-300">Junior Developer</p>
            <p className="animate-fade-in delay-500">UI/UX Designer</p>
            <p className="animate-fade-in delay-700">Tech Enthusiast</p>
            <p className="animate-fade-in delay-700">Prompt Engineer</p>
          </div>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in delay-1000">
            Passionate about creating beautiful, functional digital experiences that make a difference. 
            Let's build something amazing together.
          </p>

          <div className="flex justify-center space-x-6 mb-16 animate-fade-in delay-1000">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 transform"
            >
              Get In Touch
            </Link>
            <Link
              to="/projects"
              className="border border-gray-400 text-gray-300 hover:text-white hover:border-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 transform"
            >
              View My Work
            </Link>
          </div>

          <div className="flex justify-center space-x-6 animate-fade-in delay-1000">
            <a href="https://github.com/sxevejr" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/steveowitijr" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
              <Linkedin size={24} />
            </a>
            <a href="mailto:steveowitijr@gmail.com" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-gray-400" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
