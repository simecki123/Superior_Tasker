import { useState } from 'react';
import './Add-New-Task-dark.css';
import PropTypes from 'prop-types'; 

function AddNewTaskScreen({ projectlist, setprojectlist }) {
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [newprojectlist, setnewProjectList] = useState(projectlist || []);

    const handleAddTask = () => {
        if (newTaskTitle.trim() !== '') {
            const newTask = {
                id: Math.random().toString(36).substr(2, 9), // Generate a unique ID
                title: newTaskTitle.trim(),
                completed: false,
            };
            setnewProjectList(prevList => [...prevList, newTask]);
            setNewTaskTitle('');
        }
    };

    const handleDeleteTask = (taskId) => {
        setnewProjectList(prevList => prevList.filter(task => task.id !== taskId));
    };

    const handleMoveTaskUp = (taskId) => {
        const index = newprojectlist.findIndex(task => task.id === taskId);
        if (index > 0) {
            const newList = [...newprojectlist];
            const temp = newList[index];
            newList[index] = newList[index - 1];
            newList[index - 1] = temp;
            setnewProjectList(newList);
        }
    };

    const handleMoveTaskDown = (taskId) => {
        const index = newprojectlist.findIndex(task => task.id === taskId);
        if (index < newprojectlist.length - 1) {
            const newList = [...newprojectlist];
            const temp = newList[index];
            newList[index] = newList[index + 1];
            newList[index + 1] = temp;
            setnewProjectList(newList);
        }
    };

    return (
        <>
            <div className='toDoList-create-new-project'>
                <h1 className='todo-list-createproject-title'>To-Do_List</h1>

                <div>
                    <input 
                        className='todo-list-create-project-enter-task-input'
                        type='text' 
                        placeholder='Enter a task ...' 
                        value={newTaskTitle} 
                        onChange={(e) => setNewTaskTitle(e.target.value)} 
                    />
                    <button className='add-button-create-new-project' onClick={handleAddTask}>Add Task</button>
                </div>
                <hr />

                <ol className='todo-list-create-project-unordered-list'>
                    {newprojectlist.map(task => (
                        <li  className='todo-list-create-project-list' key={task.id}>
                            <span className='text-create-new-project-task-title'>{task.title}</span>
                            <button className='text-create-new-project-task-delete-button' onClick={() => handleDeleteTask(task.id)}>Delete</button>
                            <button className='text-create-new-project-task-move-button' onClick={() => handleMoveTaskUp(task.id)}>☝</button>
                            <button className='text-create-new-project-task-move-button' onClick={() => handleMoveTaskDown(task.id)}>👇</button>
                        </li>
                    ))}
                </ol>
            </div>
        </>
    );
}

AddNewTaskScreen.propTypes = {
    projectlist: PropTypes.array.isRequired,
    setprojectlist: PropTypes.func.isRequired,
};

export default AddNewTaskScreen;
