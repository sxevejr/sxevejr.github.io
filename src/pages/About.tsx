
import About from '@/components/About';
import Navigation from '@/components/Navigation';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <div className="pt-20">
        <About />
      </div>
    </div>
  );
};

export default AboutPage;
