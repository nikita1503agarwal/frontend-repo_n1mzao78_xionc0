import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Screens from './components/Screens';
import Trust from './components/Trust';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900" dir="rtl">
      <Navbar />
      <Hero />
      <Features />
      <Screens />
      <Trust />
      <CTA />
      <footer className="py-10 text-center text-sm text-slate-500 border-t border-slate-200">
        © {new Date().getFullYear()} URP — כל הזכויות שמורות
      </footer>
    </div>
  );
}

export default App;
