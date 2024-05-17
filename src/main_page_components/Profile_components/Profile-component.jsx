import './Profile-component-dark.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProfileScreen({ user }) {
  return (
    <div className="Profile-component">
      <img src={user.img} alt='LOGO' className='profile-component-big-logo' />
      <h1 className='profile-component-big-name-surname'>{user.firstName + " "+ user.lastName}</h1>
      <h3 className='profile-component-profile-description'>Description</h3>
      <p className='profile-component-description-text'>{user.description}</p>
      <Link to={"/editprofile"}>
        <button className='profile-component-edit-button'>EDIT PROFILE</button>
      </Link>
    </div>
  );
}

ProfileScreen.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    // Add other user properties and their PropTypes
  }).isRequired,
};

export default ProfileScreen;
