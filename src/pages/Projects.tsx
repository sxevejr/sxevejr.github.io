
import Projects from '@/components/Projects';
import Navigation from '@/components/Navigation';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <div className="pt-20">
        <Projects />
      </div>
    </div>
  );
};

export default ProjectsPage;
