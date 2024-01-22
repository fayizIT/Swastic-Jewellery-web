import Slider from 'react-slick';
import lovelock1 from '../assets/lovelock1.png';
import lovelock2 from '../assets/lovelock2.png';
import lovelock3 from '../assets/lovelock3.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LoveLockdown = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Display one image at a time
    slidesToScroll: 1,
    centerMode: true,
  };

  const containerStyle = {
    padding: '20px', // Adjust the padding as needed
    textAlign: 'center',
  };

  const headingStyle = {
    color: 'black',
    fontWeight: 'bold',
  };

  const paraStyle = {
    color: 'grey',
    fontWeight: 'bold',
  };

  const infoContainerStyle = {
    marginTop: '20px',
  };

  const priceStyle = {
    color: 'grey',
    fontFamily: 'Cormorant Garamond, serif',
  };

  const priceStyleMedium = {
    color: 'black',
    fontSize: '14px',
    fontWeight: 'bold',
    fontFamily: 'Cormorant Garamond, serif',
  };

  const buttonStyle = {
    backgroundColor: 'white',
    border: '1px solid black',
    color: 'grey',
    padding: '10px 20px',
    marginTop: '20px',
    cursor: 'pointer',
  };

  const images = [lovelock1, lovelock2, lovelock3];

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Discover Love Lockdown</h2>
      <p style={paraStyle}>Traditional symbols of undying love just wont cut it anymore</p>

      <Slider {...sliderSettings}>
        {images.map((image, index) => (
          <div key={index}>
            <div style={{ margin: '0 auto', width: '80%' }}>
              <img
                src={image}
                alt={`Portal Necklace ${index + 1}`}
                style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '5px' }}
              />
            </div>
            <div style={infoContainerStyle}>
              <p style={priceStyleMedium}>Portal Necklace </p>
              <p style={priceStyle}>18k gold on sterling silver</p>
              <p>
                ₹3200 <del style={priceStyleMedium}>₹6200</del>
              </p>
            </div>
          </div>
        ))}
      </Slider>

      <button style={buttonStyle}>Explore Collection</button>
    </div>
  );
};

export default LoveLockdown;
