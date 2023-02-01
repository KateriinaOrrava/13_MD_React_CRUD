import React from "react";
import { useState, useEffect } from 'react';
import axios from "axios";
import Task from "./type";
import styles from './stylesForComponents/AddTask.module.css'

const DEFAULT_TASK ={
    name: '', 
    description: '',
    imageUrl: ''
};

interface AddNewTaskProps{
    addNewTask: ({name, description, imageUrl}: Omit<Task,'id'>) => void
};

export const AddNewTask: React.FC<AddNewTaskProps> = () => {
    const [name, setName] = useState('empty');
    const [description, setDescription] = useState('empty');
    const [imageUrl, setImageUrl] = useState('empty');

        return (
            <div className={styles.task_panel_container}>
                <div className={styles.fields_container}>
                    <div className={styles.field_container}>
                        <label htmlFor="name">
                            <div >Name</div>
                            <input type="text" id='name' name='name' onChange={(e) => setName(e.target.value)} placeholder='Add Task Name'/>
                        </label>
                    </div>
                    <div  className={styles.field_container}>
                        <label htmlFor="description">
                            <div>Description</div>
                            <input type="text" id='description' name='description' onChange={(e) => setDescription(e.target.value)} placeholder='Add Task Description'/>
                        </label>
                    </div>
                    <div  className={styles.field_container}>
                        <label htmlFor="description">
                            <div>Image</div>
                            <input type="text" id='imageUrl' name='imageUrl' onChange={(e) => setImageUrl(e.target.value)} placeholder='Add Task Image URL'/>
                        </label>
                    </div>
                </div>
                <button className={styles.addNewButton} onClick={() => {
                    console.log(name, description, imageUrl);
                    axios.post<Task>('http://localhost:2004/DEFAULT_BUCKET_LIST_TASKS', {
                        name: name,
                        description: description,
                        imageUrl: imageUrl
                    });
                    window.location.reload();
                }}> 
                    ADD
                </button>
        </div>
    )
}



// export const TodoKeeper: React.FC<TodoKeeperProps> = ({addTodo}) => {
//     const [todo, setTodo] =React.useState(DEFAULT_TODO);

//     const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const {name, value} = event.target;
//         setTodo({ ...todo, [name]:value });
//     }

//     //funkcija dzēš ārā informāciju, kuru mēs tikko ievadījām
//     const onClick =() => {
//         addTodo({name: todo.name, description: todo.description});
//         setTodo(DEFAULT_TASK);
//     }

   

//     return (
//         <div className={styles.todo_panel_container}>
//             <div className={styles.fields_container}>
//                 <div className={styles.field_container}>
//                     <label htmlFor="name">
//                         <div className="">name</div>
//                         <input type="text" id='name' value={todo.name} name='name' onChange={onChange} placeholder='Add Task Name'/>
//                     </label>
//                 </div>
//                 <div className={styles.field_container}>
//                     <label htmlFor="description">
//                         <div>description</div>
//                         <input type="text" id='description' value={todo.description} name='description' onChange={onChange} placeholder='Add Task Description'/>
//                     </label>
//                 </div>
//             </div>
//             <div className={styles.button_container}>
//                 <Button color='green' key='name' onClick={onClick} > 
//                     ADD
//                 </Button>
//             </div>
//         </div>
//         )
// }