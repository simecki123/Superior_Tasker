import { Link } from 'react-router-dom';
import './Save-button-dark.css'

function SaveButtonScreen(){
    return(
        <>
        <div className='save-button-body'>
            <hr></hr>
            <div className="save-all">
                <Link to={"/mainpage"}>
                    <button className='save-btn'>SAVE</button>
                </Link>
            </div>
        </div>
        </>
    );
}

export default SaveButtonScreen;