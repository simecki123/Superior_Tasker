import ToolBarComponent_MainPage from "../main_page_components/ToolBar_components/Toolbar";
import CompletionBarScreen from "./CompletionComponents/CompletionBar-Screen";
import ListOfTasksToCompleteScreen from "./List-Of-Tasks-Components/List-Of-Tasks-To-Complete";
import ProjectDetailsScreen from "./Project-Deatils-Components/Project-Details_component";
import './Project-details-task-list-dark.css'

function ProjectDetailsTaskListScreen(){
    return(
        <>
            <div className="project-details-list-of-tasks">
                <div className='tool-bar'>
                    <ToolBarComponent_MainPage></ToolBarComponent_MainPage>
                </div>

                <div className='main-part'>
                    <div className='project-desc'>
                        <ProjectDetailsScreen />
                    </div>
                    <div className='add-new-task'>
                        <ListOfTasksToCompleteScreen />
                    </div>
                </div>
                <CompletionBarScreen />
            </div>
        </>
    );
}

export default ProjectDetailsTaskListScreen;