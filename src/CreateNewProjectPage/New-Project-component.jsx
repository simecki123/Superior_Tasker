import ToolBarComponent_MainPage from "../main_page_components/ToolBar_components/Toolbar";
import SaveButtonScreen from "./Button-save/Save-button-component";
import ProjectDescScreen from "./Proj-title-description/Project-desc-component";
import AddNewTaskScreen from "./To-Do-List-Add-New-Task/To-DO-List-Add-New-Task-component";
import './New-Project-component-dark.css'; // Import the CSS file for styling

function NewProjectComponent() {
    return(
        <div className='main-page'>
            <div className='tool-bar'>
                <ToolBarComponent_MainPage />
            </div>
            <div className='main-part'>
                <div className='project-desc'>
                    <ProjectDescScreen />
                </div>
                <div className='add-new-task'>
                    <AddNewTaskScreen />
                </div>
            </div>
            <div className="bottom-bar">
                <SaveButtonScreen />
            </div>
        </div>
    );
}

export default NewProjectComponent;
