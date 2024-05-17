import './ToolBar-dark.css'
import logo from '../../../public/SuperiorTasker.png'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ToolBarComponent_MainPage({ user }) {
  // If user prop is not provided, display a default value or handle it accordingly
  if (!user) {
    // Display default content or return null
    return null;
  }

  return (
    <>
      <div className='toolbar'>
        <div className="tool-bar-left-section">
          <div className='tool-bar-dropdown'>
            <button className='hamburger-btn'>
              <div className="hamburger-container">
                <div className="hamburger-bar"></div>
                <div className="hamburger-bar"></div>
                <div className="hamburger-bar"></div>
              </div>
            </button>
            <div className='tool-bar-dropdown-content'>
              <Link to={"/"}>
                <span className='tool-bar-span' >
                  Log out
                </span>
              </Link>
            </div>
          </div>
          <img src={user.img} alt='LOGO' className='tool-bar-small-logo' />
          <h1 className='tool-bar-name-surname'>{user.firstName + " " + user.lastName}</h1>
        </div>

        <div className="tool-bar-right-section">
          <div className='dropdown'>
            <button className='settings-btn'>
              ⚙️
            </button>
            <div className='dropdown-content'>
              <span className='tool-bar-span'>
                Light
              </span>
              <span className='tool-bar-span'>
                Dark
              </span>
            </div>
          </div>
          <img src={logo} alt='LOGO' className='tool-bar-small-logo' />
        </div>
      </div>
      <hr></hr>
    </>
  );
}

// Define prop type validation
ToolBarComponent_MainPage.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    // Add other user properties and their PropTypes
  }),
};

export default ToolBarComponent_MainPage;
