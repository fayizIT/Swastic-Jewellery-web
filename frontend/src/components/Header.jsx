import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import UpperHeader from './upperHeader'; 
import './Header.css'; 
import logo from '../assets/logo.png'; 

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
                {/* Add  dropdown content here */}
                <div>Shop Category</div>
              </div>
            </div>
          </div>

          <div className="center">
            
            <div className="brand-name" style={{ marginRight: '60px' }}>
              <img
                src={logo}
                alt="brand Logo"
                className="logo"
                style={{ maxWidth: '100%', maxHeight: '80px', width: 'auto', height: 'auto' }}
              />
              SWASTIK RAJATHA
            </div>
            
          </div>

          <div className="right-side">
            <div className="nav-text client-care">Client Care</div>
            <div className="nav-text heritage">Heritage</div>

            
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
