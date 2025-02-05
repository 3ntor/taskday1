import './App.css';
import MyNav from './day1/MyNav';
import HeroSec from './day1/HeroSec';
import ConTent from './day1/ConTent';
import Products from './day1/Products';
import NavBar from './day2/NavBar';
import AboutSec from './day2/AboutSec';
import NavBarr from './day2/NavBarr';
import ProductCard from './day2/ProductCard';
import Footer from './day2/Footer';
function App() {
  return (
<>
{/* <MyNav/>
<HeroSec design={"flex-row"}/>
<ConTent/>
<HeroSec design={"flex-row-reverse"}/>
<Products/> */}
<NavBar/>
<AboutSec/>
<NavBarr/>
<ProductCard/>
{/* <Productss/> */}
<Footer/>
</>
  );
}
export default App;