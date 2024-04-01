import './Profile-component-dark.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

function ProfileScreen(){
    return(
        
            <div className="Profile-component">
                <img src={logo} alt='LOGO' className='big-logo' />
                <h1 className='big-Name-surname'>Ime Prezime</h1>
                <h3 className='profile-description'>Description</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam.
                    </p>
                <Link to={"/editprofile"}>
                    <button>EDIT PROFILE</button>
                </Link>
            </div>

        
        
    )
}

export default ProfileScreen