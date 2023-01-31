import React from "react";
import DEFAULT_BUCKET_LIST_TASKS from "./startTasksDB";
import Task from "./type";
import { TaskItem } from "./TaskItem";
import styles from './stylesForComponents/Items.module.css'
import { AddNewTask, TodoKeeper } from "./AddTask";


interface TasksProps {
    tasks: Task[];
    deleteTask: (id: Task['id']) => void;
}

export const Tasks:React.FC<TasksProps> = ({tasks, deleteTask})  => {
    return (
        <div className={styles.containerWithTasks}>
            {tasks.map((task) => {
                return (<TaskItem key={task.id} task={task} deleteTask={deleteTask}/>)
            }
            )}
        </div>
    )
}
