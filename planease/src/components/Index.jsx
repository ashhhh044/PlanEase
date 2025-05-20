const Index = () => {
  return (
    <>
      <div id="main" className="main">
        <nav id="navbar" className="navbar">
          <div id="logo" className="logo">PlanEase</div>
          <ul>
            <li className="nav-item"><a href="view-task.html">Tasks</a></li>
            <li className="nav-item"><a href="calendar.html">Calendar</a></li>
            <li className="nav-item"><a href="user-profile">Profile</a></li>
          </ul>
        </nav>
        <div id="add-task" className="add-task">
          <a href="task-form.html">
            <img src="plus-circle-dotted.svg" alt="add-task-button" className="add-task-button"/>
          </a>
          <p>No Tasks Yet!<br />Click + To Add Task</p>
        </div>
      </div>
      <footer id="footer" className="footer">
        <p>Copyright PlanEase 2025</p>
        <img src="Frame 3.svg" alt="footer cloud" className="footer-bg" />
      </footer>
    </>
  );
};

export default Index;
