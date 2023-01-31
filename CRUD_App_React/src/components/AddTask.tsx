import React from "react";
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
export const AddNewTask: React.FC<AddNewTaskProps> = ({addNewTask}) => {
    const [task, setTask] =React.useState(DEFAULT_TASK);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setTask({ ...task, [name]:value });
    }

    const onClick =() => {
        addNewTask({name: task.name, description: task.description, imageUrl: task.imageUrl});
        setTask(DEFAULT_TASK);
    }

    return (
        <div className={styles.task_panel_container}>
            <div className={styles.fields_container}>
                <div className={styles.field_container}>
                    <label htmlFor="name">
                        <div className="">Name</div>
                        <input type="text" id='name' value={task.name} name='name' onChange={onChange} placeholder='Add Task Name'/>
                    </label>
                </div>
                <div className={styles.field_container}>
                    <label htmlFor="description">
                        <div>Description</div>
                        <input type="text" id='description' value={task.description} name='description' onChange={onChange} placeholder='Add Task Description'/>
                    </label>
                </div>
                <div className={styles.field_container}>
                    <label htmlFor="description">
                        <div>Image</div>
                        <input type="text" id='imageUrl' value={task.imageUrl} name='imageUrl' onChange={onChange} placeholder='Add Task Image'/>
                    </label>
                </div>
            </div>
            <div className={styles.button_container}>
                <button onClick={onClick} className={styles.addNewButton}> 
                    Add
                </button>
            </div>
        </div>
        )


    //return <h1 className={styles.header}>new here</h1>

}

export const TodoKeeper: React.FC<TodoKeeperProps> = ({addTodo}) => {
    const [todo, setTodo] =React.useState(DEFAULT_TODO);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setTodo({ ...todo, [name]:value });
    }

    //funkcija dzēš ārā informāciju, kuru mēs tikko ievadījām
    const onClick =() => {
        addTodo({name: todo.name, description: todo.description});
        setTodo(DEFAULT_TASK);
    }

   

    // return (
    //     <div className={styles.todo_panel_container}>
    //         <div className={styles.fields_container}>
    //             <div className={styles.field_container}>
    //                 <label htmlFor="name">
    //                     <div className="">name</div>
    //                     <input type="text" id='name' value={todo.name} name='name' onChange={onChange} placeholder='Add Task Name'/>
    //                 </label>
    //             </div>
    //             <div className={styles.field_container}>
    //                 <label htmlFor="description">
    //                     <div>description</div>
    //                     <input type="text" id='description' value={todo.description} name='description' onChange={onChange} placeholder='Add Task Description'/>
    //                 </label>
    //             </div>
    //         </div>
    //         <div className={styles.button_container}>
    //             <Button color='green' key='name' onClick={onClick} > 
    //                 ADD
    //             </Button>
    //         </div>
    //     </div>
    //     )
}