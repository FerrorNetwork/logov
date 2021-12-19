import './App.css';
import { Routes, Route, Link, } from "react-router-dom";
import Task2 from './Tasks/Task2';
import Task3 from './Tasks/Task3';
import Task4 from './Tasks/Task4';
import Task5 from './Tasks/Task5';
import Task6 from './Tasks/Task6';
import Task7 from './Tasks/Task7';
import Task8 from './Tasks/Task8';
import Task9 from './Tasks/Task9'
import Task10 from './Tasks/Task10'

function App() {
  return (
    <div className="App">
      <nav>
        
        <Link style={{ marginRight: 10 }} to='Task9' >Задача 9</Link>
        
      </nav>
      <Routes>
        <Route path="/Task9" element={<Task9 />} />
        
      </Routes>
    </div>
  );
}

export default App;
