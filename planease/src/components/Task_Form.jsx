const TaskForm = () => {
    return(
        <>
        <div className="main">
        <nav className="navbar">
            <div className="logo">PlanEase</div>
            <ul>
                <li className="nav-item">Tasks</li>
                <li className="nav-item">Calendar</li>
                <li className="nav-item">Profile</li>
            </ul>
        </nav>   
        <div className="add-task-form">
            <input type="text" placeholder="Enter Task" className="add-task-detail"/>
            <select id="priority" className="add-task-detail">
                <option value="--">--</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>
            <input type="text" placeholder="Enter Duration (In Hours)" className="add-task-detail"/>
            <input type="date" className="add-task-detail"/>
            <input type="submit" value="Add Task" className="add-task-button"/>
        </div>
    </div>  
    <footer className="footer">
        <p>Copyright PlanEase 2025</p>
        <img src="Frame 3.svg" alt="footer cloud" className="footer-bg"/>
    </footer>
        </>
    )
}
export default TaskForm