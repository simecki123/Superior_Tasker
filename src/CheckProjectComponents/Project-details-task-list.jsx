import { useState } from "react";
import ToolBarComponent_MainPage from "../main_page_components/ToolBar_components/Toolbar";
import CompletionBarScreen from "./CompletionComponents/CompletionBar-Screen";
import ProjectDetailsScreen from "./Project-Deatils-Components/Project-Details_component";
import ListOfTasksToCompleteScreen from "./List-Of-Tasks-Components/List-Of-Tasks-To-Complete";
import './Project-details-task-list-dark.css';

function ProjectDetailsTaskListScreen() {
    const [projectlist, setProjectList] = useState([
        {"id": "1","userId": "1", "title": "Go to school", "description": "Go to school dude!", "date": "01-04-2024", "completion": "0%"},
    ]);

    const [tasklist, setTaskList] = useState([
       {"id": "1", "projectId": "1", "name": "Prepare your bag", "done": false},
       {"id": "2", "projectId": "1", "name": "Go on the bus station", "done": false},
       {"id": "3", "projectId": "1", "name": "Go on all classes", "done": false},
       {"id": "4", "projectId": "1", "name": "Go home", "done": false} 
    ]);

    const moveTaskUp = (taskId) => {
        const index = tasklist.findIndex(task => task.id === taskId);
        if (index > 0) {
            const newList = [...tasklist];
            const temp = newList[index];
            newList[index] = newList[index - 1];
            newList[index - 1] = temp;
            setTaskList(newList);
        }
    };

    const moveTaskDown = (taskId) => {
        const index = tasklist.findIndex(task => task.id === taskId);
        if (index < tasklist.length - 1) {
            const newList = [...tasklist];
            const temp = newList[index];
            newList[index] = newList[index + 1];
            newList[index + 1] = temp;
            setTaskList(newList);
        }
    };

    const deleteTask = (taskId) => {
        setTaskList(prevList => prevList.filter(task => task.id !== taskId));
    };

    const toggleTaskDone = (taskId) => {
        setTaskList(prevList =>
            prevList.map(task =>
                task.id === taskId ? { ...task, done: !task.done } : task
            )
        );
    };

    return (
        <>
            <div className="project-details-list-of-tasks">
                <div className='tool-bar'>
                    <ToolBarComponent_MainPage />
                </div>
                <div className='main-part'>
                    <div className='project-desc'>
                        <ProjectDetailsScreen projectlist={projectlist} setProjectList={setProjectList} />
                    </div>
                    <div className='add-new-task'>
                        <ListOfTasksToCompleteScreen tasklist={tasklist} setTaskList={setTaskList} moveTaskUp={moveTaskUp} moveTaskDown={moveTaskDown} deleteTask={deleteTask} toggleTaskDone={toggleTaskDone} />
                    </div>
                </div>
                <CompletionBarScreen tasklist={tasklist} />
            </div>
        </>
    );
}

export default ProjectDetailsTaskListScreen;
