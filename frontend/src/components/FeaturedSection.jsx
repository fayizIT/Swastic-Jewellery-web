import './FeaturedSection.css'; 

const FeaturedSection = () => {
    const sectionStyle = {
        backgroundColor: 'black',
    }
  return (
    <div className="featured-section" style={sectionStyle}>
      <div className="background-images">
        <div className="background-image image1"></div>
        <div className="background-image image2"></div>
      </div>

      <div className="content">
        <h3 className="main-heading">Jewelry For Every Day</h3>
        <p className="sub-heading">Brilliant design and unparalleled craftsmanship.</p>
        <p className="description">Signature styles made to be daring.</p>
        <button className="explore-button">Explore Collection</button>
      </div>
    </div>
  );
};

export default FeaturedSection;
