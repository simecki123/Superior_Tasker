import './List-Of-Tasks-To-Complete-dark.css'


function ListOfTasksToCompleteScreen(){
    return(
        <>
        <div className='toDoList'>
                <h1>To-Do_List</h1>

                
                <hr></hr>

                <ol>
                    
                        <li >
                            <input type='checkbox' className='checkbox' value={true} />
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

export default ListOfTasksToCompleteScreen;