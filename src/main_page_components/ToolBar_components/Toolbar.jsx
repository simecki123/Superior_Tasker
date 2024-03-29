import './ToolBar-dark.css'
import logo from '../../../public/SuperiorTasker.png'
import profilePic from '../../assets/logo.png'
import { Link } from 'react-router-dom';

function ToolBarComponent_MainPage(){
    return(
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
                    <img src={profilePic} alt='LOGO' className='small-logo' />
                    <h1 className='Ime-Prezime'>Ime Prezime</h1>
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

export default ToolBarComponent_MainPage;