import FeaturedSection from './components/FeaturedSection';
import Footer from './components/Footer';
import Header from './components/Header';
import CategoriesSection from './components/CategoriesSection';
import Heritage from './components/Heritage';
import PapillonCollection from './components/PapillonCollection';
import PopularCollection from './components/PopularCollection';
import LoveLockdown from './components/LoveLockdown';


function App() {
  return (
   <div>
    <Header/>
    <FeaturedSection/>
    <PopularCollection/>
    <CategoriesSection/>
    <PapillonCollection/>
    <LoveLockdown/>
    <Heritage/>
    <Footer/>
   </div>
  );
}

export default App;
