import './CompletionBar-dark.css'

function CompletionBarScreen(){
    return(
        <>
            <div className="completion-bar">
                <h1 className="completion-bar-title">Task Completion</h1>

                <div className="myProgress">
                     <div className="myBar">10%</div>
                </div>
            </div>
        </>
    );
}

export default CompletionBarScreen;