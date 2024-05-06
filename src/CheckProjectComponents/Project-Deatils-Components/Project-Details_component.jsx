import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Project-Details-dark.css';

function ProjectDetailsScreen({ projectlist, setProjectlist }) {
    return (
        <>
            <div className="project-details-desc">
                <h2 className="project-name">{projectlist[0].title}</h2>

                <h3 className="project-desc-title">Description</h3>
                
                <p className='description'>{projectlist[0].description}</p>

                <Link to={"/newproject"}>
                    <button className="edit-project-btn">Edit project</button>
                </Link>
            </div>
        </>
    );
}

ProjectDetailsScreen.propTypes = {
    projectlist: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
    setProjectlist: PropTypes.func.isRequired,
};

export default ProjectDetailsScreen;
