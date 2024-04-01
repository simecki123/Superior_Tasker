import './Profile-component-dark.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

function ProfileScreen(){
    const user = {"id": "1",
                "firstName": "Sime",
                "lastName": "Roncevic",
                "email": "sroncevic19@gmail.com",
                "password": "MaliPederi123",
                "img": logo,
                "description": "Basic user"};

    return(
        
            <div className="Profile-component">
                <img src={user.img} alt='LOGO' className='big-logo' />
                <h1 className='big-Name-surname'>{user.firstName + " "+ user.lastName}</h1>
                <h3 className='profile-description'>Description</h3>
                <p>{user.description}</p>
                <Link to={"/editprofile"}>
                    <button>EDIT PROFILE</button>
                </Link>
            </div>

        
        
    )
}

export default ProfileScreen