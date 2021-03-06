import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/hero/HeroView';
import SectionHeader from './components/investment/SectionHeader';
import InvestCatalogue from './components/investment/InvestCatalogue';
import InvestmentTab from './components/investment_tab/InvestmentTab';
import ConsultancyTab from './components/consultancy_tab/ConsultancyTab';
import PoketMoniTab from './components/poketmon-_tab/PokeMoniTab';
import EducationTab from './components/education_tab/EducationTab';
import BusinessSupport from './components/business_support_tab/BusinessSupport';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div >
      <NavBar/>
      <Hero/>
      <InvestmentTab/>
      <ConsultancyTab/>
      <PoketMoniTab/>
      <EducationTab/>
      <BusinessSupport/>
      <Footer/>
    </div>
  );
}

export default App;
