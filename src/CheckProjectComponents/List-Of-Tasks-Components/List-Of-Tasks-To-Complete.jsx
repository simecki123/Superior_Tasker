import './List-Of-Tasks-To-Complete-dark.css';
import PropTypes from 'prop-types';

function ListOfTasksToCompleteScreen({ tasklist, setTasklist, moveTaskUp, moveTaskDown, deleteTask, toggleTaskDone }) {
    return (
        <>
            <div className='toDoList-list-of-tasks'>
                <h1 className='todo-list-title'>To-Do_List</h1>
                <hr></hr>
                <ol className='unordered-list-todo-list-of-tasks'>
                    {tasklist.map(task => (
                        <li className='list-todo-list-of-tasks' key={task.id}>
                            <input 
                                type='checkbox'  
                                className='todo-list-checkbox' 
                                value={task.done} 
                                onChange={() => toggleTaskDone(task.id)} // Call toggleTaskDone on change
                            />
                            <span className='todo-list-text'>{task.name}</span>
                            <button className='todo-list-delete-button' onClick={() => deleteTask(task.id)}>Delete</button>
                            <button className='todo-list-move-button' onClick={() => moveTaskUp(task.id)}>☝</button>
                            <button className='todo-list-move-button' onClick={() => moveTaskDown(task.id)}>👇</button>
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
