
import { Code, Palette, Database, Globe, Smartphone, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-blue-400 to-cyan-400',
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      color: 'from-purple-400 to-pink-400',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Wireframing', 'Design Systems']
    },
    {
      title: 'Backend & Database',
      icon: Database,
      color: 'from-green-400 to-emerald-400',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'GraphQL']
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      color: 'from-orange-400 to-red-400',
      skills: ['Responsive Design', 'PWAs', 'Web Performance', 'SEO', 'Accessibility', 'Testing']
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'from-indigo-400 to-purple-400',
      skills: ['React Native', 'Flutter', 'Mobile UI', 'App Store', 'Cross-platform', 'Mobile UX']
    },
    {
      title: 'Tools & Workflow',
      icon: GitBranch,
      color: 'from-teal-400 to-blue-400',
      skills: ['Git', 'GitHub', 'VS Code', 'NPM', 'Webpack', 'Agile/Scrum']
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications and user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105 transform group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4`}>
                <category.icon className="text-white" size={24} />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between text-gray-400 hover:text-white transition-colors"
                  >
                    <span>{skill}</span>
                    <div className="w-16 bg-slate-700 rounded-full h-1">
                      <div
                        className={`h-1 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000`}
                        style={{
                          width: `${Math.random() * 40 + 60}%`,
                          animationDelay: `${(index * 6 + skillIndex) * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
