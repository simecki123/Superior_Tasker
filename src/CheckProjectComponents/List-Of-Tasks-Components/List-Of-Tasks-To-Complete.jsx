import './List-Of-Tasks-To-Complete-dark.css';
import PropTypes from 'prop-types';

function ListOfTasksToCompleteScreen({ tasklist, setTasklist, moveTaskUp, moveTaskDown, deleteTask, toggleTaskDone }) {
    return (
        <>
            <div className='toDoList'>
                <h1>To-Do_List</h1>
                <hr></hr>
                <ol>
                    {tasklist.map(task => (
                        <li key={task.id}>
                            <input 
                                type='checkbox' 
                                className='checkbox' 
                                value={task.done} 
                                onChange={() => toggleTaskDone(task.id)} // Call toggleTaskDone on change
                            />
                            <span className='text'>{task.name}</span>
                            <button className='delete-button' onClick={() => deleteTask(task.id)}>Delete</button>
                            <button className='move-button' onClick={() => moveTaskUp(task.id)}>☝</button>
                            <button className='move-button' onClick={() => moveTaskDown(task.id)}>👇</button>
                        </li>
                    ))}
                </ol>
            </div>
        </>
    );
}

ListOfTasksToCompleteScreen.propTypes = {
    tasklist: PropTypes.array.isRequired,
    setTasklist: PropTypes.func.isRequired,
    moveTaskUp: PropTypes.func.isRequired,
    moveTaskDown: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    toggleTaskDone: PropTypes.func.isRequired, // Add prop type for toggleTaskDone
};

export default ListOfTasksToCompleteScreen;
