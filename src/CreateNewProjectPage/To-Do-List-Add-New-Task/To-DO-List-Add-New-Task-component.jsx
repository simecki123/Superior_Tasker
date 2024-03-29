import './Add-New-Task-dark.css'

function AddNewTaskScreen(){
    return(
        <>
            <div className='toDoList'>
                <h1>To-Do_List</h1>

                <div>
                    <input type='text'
                            placeholder='Enter a task ...'
                            ></input>
                    
                    <button className='add-button'
                            >Add Task</button>
                </div>
                <hr></hr>

                <ol>
                    
                        <li >
                            <span className='text'>New task</span>
                            <button className='delete-button'>Delete</button>
                            
                            <button className='move-button' >☝</button>
                            <button className='move-button' >👇</button>
                        </li>
                </ol>

            </div>
        </>
    );
}

export default AddNewTaskScreen;