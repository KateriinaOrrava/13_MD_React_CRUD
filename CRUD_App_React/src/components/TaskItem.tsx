import React from "react";
import Task from "./type";
import { Tasks } from "./Tasks";
import styles from './stylesForComponents/Items.module.css'
import axios from "axios";

interface TaskItemProps {
    task: Task;
}

export const TaskItem: React.FC<TaskItemProps> = ({task}) => {
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
                <button onClick={() => {
                    console.log(task.id);
                    axios.delete<Task>(`http://localhost:3004/DEFAULT_BUCKET_LIST_TASKS/${task.id}`);
                    window.location.reload();
                }
                    } className={styles.buttonContainer__deleteButton}>Delete</button>
                <button onClick={() => {

                }} className={styles.buttonContainer__editButton}>Edit</button>
            </div>
        </div>
    )
}