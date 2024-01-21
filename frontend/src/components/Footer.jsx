
import './Footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
  return  (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Your Logo" style={{ width: '50px', height: '50%' }} />
        <div className="footer-logo-text">
          SWASTIK <br /> RAJATHA
        </div>
      </div>


      <div className="footer-content" style={{ paddingRight: '365px' }}>
        <div className="footer-section">
          <h3 className="footer-heading">Support</h3>
          <ul>
            <li>FAQ</li>
            <li>Shipping</li>
            <li>Returns + Exchanges</li>
            <li>Warranty</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">About Us</h3>
          <ul>
            <li>Our Heritage</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Terms</h3>
          <ul>
            <li>Terms Of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
