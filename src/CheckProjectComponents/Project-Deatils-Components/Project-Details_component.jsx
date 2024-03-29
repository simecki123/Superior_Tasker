
import { Link } from 'react-router-dom';
import './Project-Details-dark.css'

function ProjectDetailsScreen(){
    return(
        <>
            <div className="project-details-desc">
                <h2 className="project-name">Project Name</h2>

                <h3 className="project-desc-title">Description</h3>
                
                <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam.</p>

                <Link to={"/newproject"}>
                    <button className="edit-project-btn">Edit project</button>
                </Link>
            </div>
        </>
    );
}

export default ProjectDetailsScreen;