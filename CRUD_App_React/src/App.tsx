import { useState, useEffect } from 'react';
import Task from './components/type';
import DEFAULT_BUCKET_LIST_TASKS from './components/startTasksDB';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import {AddNewTask} from './components/AddTask';
import './App.css'
import axios from 'axios';
import React from 'react';



function App(){

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:3004/DEFAULT_BUCKET_LIST_TASKS',
      );

      setTasks(result.data);
    };

    fetchData();
  }, []);
  const [tasks, setTasks] = useState([]);
console.log(tasks)
return(
  <div className='app_container'>
    <Header taskCounter={(tasks.length)} />
    <div className='app_container__content'>
      <Tasks tasks={tasks} />
    </div>
    <div className="addNewContainer">
      <AddNewTask />
    </div>
  </div>
)
}

  export default App;

