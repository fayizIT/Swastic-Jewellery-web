
// import papillon from '../assets/papillon.png' // Replace with the actual image path

// const PapillonCollection = () => {
//     const sectionStyle = {
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "flex-start",
//       padding: "20px",
//       backgroundColor: "#f0f0f0",
//     };
  
//     const contentStyle = {
//       flex: "0.3", // Adjusts width
//       marginRight: "2cm",
//     };
  
//     const imageStyle = {
//       flex: "0.7", // Adjusts width
//       width: "80vw", // Scales proportionally to viewport
//       height: "400px",
//       objectFit: "cover",
//     };
  
//     const buttonStyle = {
//       backgroundColor: "white",
//       border: "1px solid black",
//       color: "grey",
//       padding: "10px 20px",
//       marginTop: "10px",
//       cursor: "pointer",
//       marginLeft: "90px",
//     };
  
//     return (
//       <div style={sectionStyle}>
//         <div style={contentStyle}>
//           <h2>The Papillon Collection</h2>
//           <p>
//             Just when the caterpillar thought her life <br />
//             was over, she began to fly.
//           </p>
//           <button style={buttonStyle}>Explore Collection</button>
//         </div>
//         <img src={papillon} alt="Papillon Collection" style={imageStyle} />
//       </div>
//     );
//   };
  
//   export default PapillonCollection;

import papillon from '../assets/papillon.png';

const PapillonCollection = () => {
  const sectionStyle = {
    display: "flex",
    flexDirection: "column", // Display items in a column on small screens
    alignItems: "center", // Center items
    padding: "20px",
    backgroundColor: "#f0f0f0",
  };

  const contentStyle = {
    width: "80%", // Adjusts width
    textAlign: "center", // Center text
    marginBottom: "20px",
  };

  const imageStyle = {
    width: "100%", // Take full width
    height: "auto", // Maintain aspect ratio
    maxWidth: "800px", // Limit maximum width
    marginBottom: "20px",
  };

  const buttonStyle = {
    backgroundColor: "transparent", // Make background transparent
    border: "1px solid black", // White thin border
    color: "black", // Text color
    padding: "10px 20px",
    marginTop: "10px",
    cursor: "pointer",
  };

  return (
    <div style={sectionStyle}>
      <div style={contentStyle}>
        <h2>The Papillon Collection</h2>
        <p>
          Just when the caterpillar thought her life <br />
          was over, she began to fly.
        </p>
        <button style={buttonStyle}>Explore Collection</button>
      </div>
      <img src={papillon} alt="Papillon Collection" style={imageStyle} />
    </div>
  );
};

export default PapillonCollection;
