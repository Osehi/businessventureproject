import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/hero/HeroView';
import SectionHeader from './components/investment/SectionHeader';

function App() {
  return (
    <div >
      <NavBar/>
      
      <Hero/>
      <SectionHeader/>
      
    </div>
  );
}

export default App;
