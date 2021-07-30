import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/hero/HeroView';
import SectionHeader from './components/investment/SectionHeader';
import InvestCatalogue from './components/investment/InvestCatalogue';

function App() {
  return (
    <div >
      <NavBar/>
      
      <Hero/>
      <InvestCatalogue/>
      
    </div>
  );
}

export default App;
