
import Skills from '@/components/Skills';
import Navigation from '@/components/Navigation';

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <div className="pt-20">
        <Skills />
      </div>
    </div>
  );
};

export default SkillsPage;
