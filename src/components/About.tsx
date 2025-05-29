
import { User, Code, Palette, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            I'm a passionate developer and designer who loves creating digital experiences that are both beautiful and functional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105 transform">
              <User className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-3">Who I Am</h3>
              <p className="text-gray-400">
                A dedicated Junior Developer with a passion for learning and growing in the tech industry. 
                I bring fresh perspectives and enthusiasm to every project.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105 transform">
              <Code className="text-purple-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-3">What I Do</h3>
              <p className="text-gray-400">
                I develop responsive web applications using modern technologies like React, TypeScript, and Tailwind CSS. 
                Always eager to learn new frameworks and tools.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105 transform">
              <Palette className="text-pink-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-3">Design Philosophy</h3>
              <p className="text-gray-400">
                I believe great design is invisible - it should feel natural and intuitive. 
                I focus on user-centered design principles to create meaningful experiences.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105 transform">
              <Zap className="text-yellow-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-3">My Drive</h3>
              <p className="text-gray-400">
                Technology fascinates me because of its power to solve real problems and improve lives. 
                I'm always exploring new technologies and industry trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
