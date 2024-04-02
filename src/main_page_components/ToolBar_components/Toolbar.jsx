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
        <div className="left-section">
          <div className='dropdown'>
            <button className='hamburger-btn'>
              <div className="container">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </button>
            <div className='dropdown-content'>
              <Link to={"/"}>
                <span >
                  Log out
                </span>
              </Link>
            </div>
          </div>
          <img src={user.img} alt='LOGO' className='small-logo' />
          <h1 className='Ime-Prezime'>{user.firstName + " " + user.lastName}</h1>
        </div>

        <div className="right-section">
          <div className='dropdown'>
            <button className='settings-btn'>
              ⚙️
            </button>
            <div className='dropdown-content'>
              <span >
                Light
              </span>
              <span >
                Dark
              </span>
            </div>
          </div>
          <img src={logo} alt='LOGO' className='small-logo' />
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
