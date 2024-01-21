
import './Heritage.css'; // Import your stylesheet
import heritage  from '../assets/heritage.png'; // Replace with the actual image path

const HeritageSection = () => {
  return (
    <div className="heritage-section">
      <div className="heritage-text">
        <h4 className="heritage-heading">Our Heritage</h4>
        <p className="heritage-description">
          Swastik Rajatha has a unique approach to jewelry making and design, one that is focused on creativity and
          innovation. A brand that is positioned to lead the way for generations to come. With his passion for unique
          designs and his talent for business, Jacob Arabo has designed iconic jewelry and watches for the world's
          biggest stars, cultural icons, royalty, and presidents all around the globe.
        </p>
        <button className="know-more-button">Know More About Our Journey</button>
      </div>

      <div className="heritage-image-container">
        <img src={heritage} alt="Heritage" className="heritage-image" />
      </div>
    </div>
  );
};

export default HeritageSection;
