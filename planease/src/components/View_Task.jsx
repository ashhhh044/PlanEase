const ViewTask = () => {
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
        <div className="view-task">
            <div className="task-details">
              <div className="task-pri-details">
                <input type="checkbox" className="task-checkbox" />
                <label className="task-name">Task Name</label>
              </div>
              <div className="task-sec-details">
                <div className="priority-badge">Priority</div>
                <div className="deadline-badge">Deadline</div>
              </div>
            </div>
          
            <div className="task-icons">
              <i className="fa fa-trash icon"></i>
              <i className="fa fa-edit icon"></i>
            </div>
          </div>
          
    </div>  
    <footer className="footer">
        <p>Copyright PlanEase 2025</p>
        <img src="Frame 3.svg" alt="footer cloud" className="footer-bg"/>
    </footer>
        </>
    )
}

export default ViewTask;