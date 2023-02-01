import React from "react";
import Task from "./type";
import { TaskItem } from "./TaskItem";
import styles from './stylesForComponents/Items.module.css'


interface TasksProps {
    tasks: Task[];
}

interface TaskItemProps {
    task: Task;  
}

export const Tasks:React.FC<TasksProps> = ({tasks})  => {
    return (
        <div className={styles.containerWithTasks}>
            {tasks.map((task) => {
                return (<TaskItem key={task.id} task={task}/>)
            }
            )}
        </div>
    )
}
