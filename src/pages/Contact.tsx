
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <div className="pt-20">
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
