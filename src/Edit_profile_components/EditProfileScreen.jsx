import { Link } from 'react-router-dom';
import './EditProfile-dark.css'; // Import the CSS file for styling

function EditProfileScreen() {
    return (
        <div className="edit-profile-screen">
            <div className="picture-dropzone">
                <input type="file" accept="image/*" />
                <p>Drag & Drop or Click to Upload Picture</p>
            </div>

            <div className="user-info">
                <h2 className='title'>Name:</h2>
                <input className="user-input" placeholder="Enter your name..." />

                <h2 className='title'>Surname:</h2>
                <input className="user-input" placeholder="Enter your surname..." />

                
            </div>
            <Link to={"/mainpage"}>
                <button className="save-btn">SAVE</button>
            </Link>
        </div>
    );
}

export default EditProfileScreen;
