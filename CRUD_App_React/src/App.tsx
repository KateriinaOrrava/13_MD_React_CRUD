import { useState } from 'react';
import Task from './components/type';
import DEFAULT_BUCKET_LIST_TASKS from './components/startTasksDB';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import {AddNewTask} from './components/AddTask';
import './App.css'
import axios from 'axios';

function App(){
  const [tasks, setTasks] = useState(DEFAULT_BUCKET_LIST_TASKS);

 
    // funkcija, lai izdzēstu uzdevumu
    const deleteTask =(id: Task['id']) => {
      // filtrējam cauri visam masīvam, ja ir sakritība
      setTasks(tasks.filter((task) => task.id !== id ));
    }

    const addNewTask = ({imageUrl, name, description}: Omit<Task, 'id'>) => {
      // katram jaunam elementam id tiks piešķirts unikals - atškirīgs no citiem;
      setTasks([...tasks, {id: (tasks[tasks.length - 1].id + 1), description, name, imageUrl}])
    }

return(
  <div className='app_container'>
    <Header taskCounter={(tasks.length)} />
    <div className='app_container__content'>
      <Tasks 
      tasks={tasks} 
      deleteTask={deleteTask} />
    </div>

    <AddNewTask addNewTask={addNewTask}/>

  </div>
)
}

  export default App;


