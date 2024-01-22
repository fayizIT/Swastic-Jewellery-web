import './CategoriesSection.css';
import bracelet from '../assets/bracelet.png';
import necklace from '../assets/necklace.png';
import earring from '../assets/earring.png';

const CategoriesSection = () => {
  return (
    <div className="categories-section">
      <h2>Shop By Category</h2>
      <p>From everyday elegance to show-stopping sparkle, discover your perfect jewelry match in every category.</p>

      <div className="category-images">
        <div className="category">
          <img src={bracelet} alt="Bracelets" />
          <p>Bracelets</p>
        </div>
        <div className="category">
          <img src={necklace} alt="Necklaces" />
          <p>Necklaces</p>
        </div>
        <div className="category">
          <img src={earring} alt="Earrings" />
          <p>Earrings</p>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
