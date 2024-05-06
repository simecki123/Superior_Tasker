import { useState, useEffect } from 'react';
import './CompletionBar-dark.css';

function CompletionBarScreen({ tasklist }) {
    const [completionPercentage, setCompletionPercentage] = useState(0);

    useEffect(() => {
        // Calculate the completion percentage based on the number of completed tasks
        const completedTasks = tasklist.filter(task => task.done);
        const percentage = (completedTasks.length / tasklist.length) * 100;
        setCompletionPercentage(percentage);
    }, [tasklist]);

    return (
        <div className="completion-bar">
            <h1 className="completion-bar-title">Task Completion</h1>
            <div className="myProgress">
                <div className="myBar" style={{ width: `${completionPercentage}%` }}>
                    {`${completionPercentage.toFixed(2)}%`}
                </div>
            </div>
        </div>
    );
}

export default CompletionBarScreen;
