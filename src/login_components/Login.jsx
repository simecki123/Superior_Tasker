import './Login-dark.css'
import logo from '../../public/SuperiorTasker.png'
import { Link } from 'react-router-dom';

function LoginScreen() {

    return(
        <>
            
            
            <div className='login-container'>
                <div className="header-container">
                    <img src={logo} alt='LOGO' className='login-logo'/>
                    <h1 className='login-title'>Superior Tasker</h1>
                </div>

                <form className="login-form">
                    <div className="form-group">
                        <label className='login-label'>Email: </label>
                    </div>
                    <div className='login-form-group'>
                        <input className='login-input' type="email" placeholder="Enter your email" />
                    </div>

                    <div className="login-form-group">
                        <label className='login-label'>Password: </label>
                    </div>
                    <div className='login-form-group'>
                        <input className='login-input' type="password" placeholder="Enter your password"/>
                    </div>
                    <Link to="/mainpage">
                        <button className="login-button">LOGIN</button>
                    </Link>
                </form>
                
                    <p > Don`t have an account? Register for free here ➡️ <Link className='register-link' to="/register">Register</Link></p>
                

            </div>
        </>
    )
}

export default LoginScreen