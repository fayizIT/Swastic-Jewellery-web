import './CategoriesSection.css'; 
import bracelet from '../assets/bracelet.png';
import necklace from '../assets/necklace.png';
import earring from '../assets/earring.png'



const CategoriesSection = () => {
  return (
    <div className="categories-section">
      <h2 style={{ color: 'black' }}>Shop By Category</h2>
      <p style={{ color: 'grey' }}>
        From everyday elegance to show-stopping sparkle, discover your perfect jewelry match in every category.
      </p>

      <div className="category-images">
        <div className="category">
           <img src={bracelet} alt="Bracelets" />
          <p style={{ color: 'white' }}> Bracelets</p>
        </div>
        <div className="category">
          <img src={necklace} alt="Necklaces" />
          <p style={{ color: 'white' }}>Necklaces</p>
        </div>
        <div className="category">
           <img src={earring} alt="Earrings" />
          <p style={{ color: 'white' }}>Earrings</p>
        </div>
      </div>

      {/* Navigation icons */}
      <div className="navigation-icons">
        <span>&#9664;</span> {/* Left arrow */}
        <span>&#9654;</span> {/* Right arrow */}
      </div>
    </div>
  );
};

export default CategoriesSection;
