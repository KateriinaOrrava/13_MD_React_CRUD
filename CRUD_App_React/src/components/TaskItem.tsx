import React from "react";
import Task from "./type";
import { Tasks } from "./Tasks";
import styles from './stylesForComponents/Items.module.css'

interface TaskItemProps {
    task: Task;
    deleteTask: (id: Task['id']) => void;    
}

export const TaskItem: React.FC<TaskItemProps> = ({task, deleteTask}) => {
    return (
        <div className={styles.taskItemContainer}>
            <div className={styles.taskItemContainer__task_information}>
                <div className={styles.taskItemContainer__task_information__taskImageUrl}>
                    <img src={task.imageUrl} alt="" />
                </div>
                <div className={styles.taskItemContainer__task_information__taskName}>
                    {task.name}
                </div>
                <div className={styles.taskItemContainer__task_information__taskDescription}>
                    {task.description}
                </div>
            </div>
            <div className={styles.taskItemContainer_buttonContainer}>
                <button onClick={() => deleteTask(task.id)} className={styles.buttonContainer__deleteButton}>Delete</button>
                <button onClick={() => alert('not ready')} className={styles.buttonContainer__editButton}>Edit</button>
            </div>
        </div>
    )
}