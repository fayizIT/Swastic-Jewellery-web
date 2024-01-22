import lovelockdown from '../assets/lovelockdown.png';
import securus from '../assets/securus.png';
import estribo from '../assets/estribo.png'

const PopularCollection = () => {
    const sectionStyle = {
      textAlign: "center",
      padding: "20px",
      backgroundColor: "#f0f0f0",
    };
  
    const headingStyle = {
      color: "black",
      textAlign: "center",
    };
  
    const textFontStyle = {
      color: "black",
      textAlign: "center",
    };
  
    const collectionContainerStyle = {
      display: "flex",
      flexWrap: "wrap", 
      justifyContent: "space-between",
      margin: "0 auto", 
    };
  
    const collectionItemStyle = {
      flex: "0.5", 
      minWidth: "250px",
      textAlign: "center",
      margin: "10px"
    };
  
    const imageStyle = {
      width: "100%", 
      height: "250px",
      objectFit: "cover",
    };
  
    const loveParagraphStyle = {
      fontWeight: "bold",
      color: "black",
      padding: "10px",
    };
  
    const exploreButtonStyle = {
      color: "black",
      marginTop: "10px",
      padding: "10px 20px",
      fontSize: "18px",
      fontWeight: "bold",
      border: "none",
      cursor: "pointer",
      backgroundColor: "transparent",
    };
  
    // Media queries for different screen sizes
    const mediaQueries = {
      tablet: `@media only screen and (max-width: 768px)`,
      mobile: `@media only screen and (max-width: 480px)`,
    };
  
    return (
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Most Popular Collections</h2>
        <p style={textFontStyle}>Brilliant design and unparalleled craftsmanship. Signature styles made to be daring.</p>
  
        <div style={collectionContainerStyle}>
          <div style={collectionItemStyle}>
            <img src={lovelockdown} alt="Love Lockdown" style={imageStyle} />
            <p style={loveParagraphStyle}>Love Lockdown</p>
            <p>Traditional symbols of undying love just wont cut it <br/>anymore.</p>
            <button style={exploreButtonStyle}>Explore</button>
          </div>
  
          <div style={collectionItemStyle}>
            <img src={securus} alt="Securus" style={imageStyle} />
            <p style={loveParagraphStyle}>Securus</p>
            <p>Bold, playful, and versatile, the Securus collection gives its dazzling interpretation of the humble safety pin.</p>
            <button style={exploreButtonStyle}>Explore</button>
          </div>
  
          <div style={collectionItemStyle}>
            <img src={estribo} alt="Estribo" style={imageStyle} />
            <p style={loveParagraphStyle}>Estribo</p>
            <p>Bold, playful, and versatile, the Estribo collection gives its dazzling interpretation of the humble safety pin.</p>
            <button style={exploreButtonStyle}>Explore</button>
          </div>
        </div>
  
        {/* Adjust styles on smaller screens */}
        <style>{mediaQueries.tablet} {`
          .collectionContainerStyle {
            justify-content: center; // Center items on tablet
          }
          .collectionItemStyle {
            min-width: 300px; // Adjust for tablet layout
          }
        `}</style>
  
        {/* Adjust styles on mobile devices */}
        <style>{mediaQueries.mobile} {`
          .collectionContainerStyle {
            grid-gap: 10px; // Add space between items on mobile
          }
          .collectionItemStyle {
            min-width: 200px; // Adjust for mobile layout
          }
          .textFontStyle {
            font-size: 16px; // Adjust text size for mobile
          }
        `}</style>
      </div>
    );
  };
  
  export default PopularCollection;