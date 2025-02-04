import './App.css';
import MyNav from './day1/MyNav';
import HeroSec from './day1/HeroSec';
import ConTent from './day1/ConTent';
import Products from './day1/Products';
function App() {
  return (
<>
<MyNav/>
<HeroSec design={"flex-row"}/>
<ConTent/>
<HeroSec design={"flex-row-reverse"}/>
<Products/>
</>
  );
}
export default App;