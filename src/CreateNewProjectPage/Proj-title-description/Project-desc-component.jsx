import './Project-desc-dark.css'

function ProjectDescScreen() {
    return(
        <>
        <div className="desc-screen">
            
                <h2 className="project-title">Project Title</h2>
                <input className="project-name-input" placeholder="Enter project name..."></input>
            

            
                <h2 className="project-description">Description</h2>
                <textarea className="project-description-name-input" 
                placeholder="Enter project description..."></textarea>
            
        </div>
        </>
    );
}

export default ProjectDescScreen;