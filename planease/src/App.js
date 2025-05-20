import Index from './components/Index'; 
import Login from './components/Login';
import Signin from './components/Signin';
import TaskForm from './components/Task_Form';
import ViewTask from './components/View_Task';
import './styles.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/task-form" element={<TaskForm/>}/>
        <Route path="/view-task" element={<ViewTask/>}/>
      </Routes>
    </Router>
  );
}

export default App;
