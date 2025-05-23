import './App.css';
import HeroSection from './components/HeroSection';
import ActivitiesSection from './components/ActivitiesSection';
import CirclesSection from './components/CirclesSection';
import CodeOfConductSection from './components/CodeOfConductSection';
import Footer from './components/Footer';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.documentElement.dir = 'rtl';
    document.body.style.direction = 'rtl';
  }, []);

  return (
    <div className="App">
      <HeroSection />
      <ActivitiesSection />
      <CirclesSection />
      <CodeOfConductSection />
      <Footer />
    </div>
  );
}

export default App;
