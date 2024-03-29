
import { Link } from 'react-router-dom';
import './Register-dark.css';

function RegisterScreen() {
  return (
    <div className='register-container'>
      <div className='register-header'>
        <h1>REGISTER</h1>
      </div>
      <form className='register-form'>
        <div className='register-form-group'>
          <label>First name: </label>
          <input type='text' maxLength={20} placeholder='Enter your first name' />
        </div>

        <div className='register-form-group'>
          <label>Last name: </label>
          <input type='text' maxLength={20} placeholder='Enter your last name' />
        </div>

        <div className='register-form-group'>
          <label>Email: </label>
          <input type='email' maxLength={30} placeholder='Enter your email' />
        </div>

        <div className='register-form-group'>
          <label>Password: </label>
          <input type='password' maxLength={20} placeholder='Enter your password' />
        </div>

        <div className='register-form-group'>
          <label>Confirm Password: </label>
          <input type='password' maxLength={20} placeholder='Confirm your password' />
        </div>

        <Link to={"/mainpage"}>
          <button>REGISTER</button>
        </Link>
      </form>
    </div>
  );
}

export default RegisterScreen;
