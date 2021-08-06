import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/hero/HeroView';
import SectionHeader from './components/investment/SectionHeader';
import InvestCatalogue from './components/investment/InvestCatalogue';
import InvestmentTab from './components/investment_tab/InvestmentTab';
import ConsultancyTab from './components/consultancy_tab/ConsultancyTab';
import PoketMoniTab from './components/poketmon-_tab/PokeMoniTab';

function App() {
  return (
    <div >
      <NavBar/>
      
      <Hero/>
      <InvestmentTab/>
      <ConsultancyTab/>
      <PoketMoniTab/>
      
    </div>
  );
}

export default App;
