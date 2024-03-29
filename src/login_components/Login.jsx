import './Login-dark.css'
import logo from '../../public/SuperiorTasker.png'
import { Link } from 'react-router-dom';

function LoginScreen() {

    return(
        <>
            
            
            <div className='login-container'>
                <div className="header-container">
                    <img src={logo} alt='LOGO' className='logo'/>
                    <h1>Superior Tasker</h1>
                </div>

                <form className="form">
                    <div className="form-group">
                        <label>Email: </label>
                    </div>
                    <div className='form-group'>
                        <input type="email" placeholder="Enter your email" />
                    </div>

                    <div className="form-group">
                        <label>Password: </label>
                    </div>
                    <div className='form-group'>
                        <input type="password" placeholder="Enter your password"/>
                    </div>
                    <Link to="/mainpage">
                        <button className="button_login">LOGIN</button>
                    </Link>
                </form>
                
                    <p > Don`t have an account? Register for free here ➡️ <Link to="/register">Register</Link></p>
                

            </div>
        </>
    )
}

export default LoginScreen