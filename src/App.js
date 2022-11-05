import './App.css';
import BrandLogos from './components/BrandLogos';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Product from './components/Product';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <BrandLogos/>
      <Slider/>
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;
