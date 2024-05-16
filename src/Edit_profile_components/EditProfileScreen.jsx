import { Link } from 'react-router-dom';
import './EditProfile-dark.css'; // Import the CSS file for styling

function EditProfileScreen() {
    return (
        <div className="edit-profile-screen-container">
            <div className="picture-dropzone-container">
                <input className='picture-dropzone-input' type="file" accept="image/*" />
                <p>Drag & Drop or Click to Upload Picture</p>
            </div>

            <div className="edit-profile-user-info-container">
                <h2 className='edit-profile-name-title'>Name:</h2>
                <input className="edit-profile-enter-name-user-input" placeholder="Enter your name..." />

                <h2 className='edit-profile-name-title'>Surname:</h2>
                <input className="edit-profile-enter-name-user-input" placeholder="Enter your surname..." />

                <h2 className='edit-profile-name-title'>Description:</h2>
                <textarea className='description-edit-profile' placeholder='Enter description' ></textarea>

                
            </div>
            <Link to={"/mainpage"}>
                <button className="save-btn-edit-profile">SAVE</button>
            </Link>
        </div>
    );
}

export default EditProfileScreen;
