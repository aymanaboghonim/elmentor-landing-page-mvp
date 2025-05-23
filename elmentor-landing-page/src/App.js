import './App.css';
import HeroSection from './components/HeroSection';
import ActivitiesSection from './components/ActivitiesSection';
import CirclesSection from './components/CirclesSection';
import CodeOfConductSection from './components/CodeOfConductSection';
import Footer from './components/Footer';

function App() {
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
