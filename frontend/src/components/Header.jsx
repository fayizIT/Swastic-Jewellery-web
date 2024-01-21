import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSearch, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import UpperHeader from './UpperHeader'; // Import the UpperHeader component
import './Header.css'; // Import your stylesheet
import logo from '../assets/logo.png'; // Replace with the actual logo path

const Header = () => {
  return (
    <div>
      <UpperHeader />

      <div className="header-container">
        <div className="header">
          <div className="left-side">
            <div className="dropdown">Jewelry</div>
            <div className="dropdown">Accessories &#9662;</div>
            <div className="dropdown">
              Shop by &#9662;
              <div className="dropdown-content">
               
                <div>Category </div>
              </div>
            </div>
          </div>

          <div className="center">
            {/* Replace " Logo" with the logo image */}
            <div className="brand-name" style={{ marginRight: '60px' }}>
              <img
                src={logo}
                alt="Your Logo"
                className="logo"
                style={{ maxWidth: '100%', maxHeight: '80px', width: 'auto', height: 'auto' }}
              />
              SWASTIK RAJATHA
            </div>
            {/* Display the brand name immediately after the logo with some space */}
          </div>

          <div className="right-side">
            <div className="nav-text client-care">Client Care</div>
            <div className="nav-text heritage">Heritage</div>

            {/* Add Font Awesome icons for search, wishlist, and cart */}
            <div className="icon"><FontAwesomeIcon icon={faSearch} /></div>
            <div className="icon"><FontAwesomeIcon icon={faHeart} /></div>
            <div className="icon"><FontAwesomeIcon icon={faShoppingCart} /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
