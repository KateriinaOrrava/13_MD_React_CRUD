import React from 'react';
import Task from './type';
import { Tasks } from './Tasks';
import styles from './stylesForComponents/Items.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { EditButton } from './EditButton';

interface TaskItemProps {
  task: Task;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [editedName, editName] = useState('edited');
  const [description, editDescription] = useState('edited');
  const [imageUrl, editImageUrl] = useState('edited');
  let handleSubmitEdit=async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.put(`http://localhost:2004/DEFAULT_BUCKET_LIST_TASKS/${task.id}`, {
        name: editedName,
        description: description,
        imageUrl: imageUrl
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  
  return (
    <div className={styles.taskItemContainer}>
      <div className={styles.taskItemContainer__task_information}>
        <div
          className={styles.taskItemContainer__task_information__taskImageUrl}
        >
          <img src={task.imageUrl} alt="" />
        </div>
        <div className={styles.taskItemContainer__task_information__taskName}>
          {task.name}
        </div>
        <div
          className={
            styles.taskItemContainer__task_information__taskDescription
          }
        >
          {task.description}
        </div>
      </div>
      <div className={styles.taskItemContainer_buttonContainer}>
        <button
          onClick={() => {
            console.log(task.id);
            axios.delete<Task>(
              `http://localhost:3004/DEFAULT_BUCKET_LIST_TASKS/${task.id}`
            );
            window.location.reload();
          }}
          className={styles.buttonContainer__deleteButton}
        >
          Delete
        </button>
        <EditButton task={task}/>
        <button
          onClick={() =>{ setIsVisible(!isVisible); console.log(task.id)}}
          className={styles.buttonContainer__editButton}
        >
          Edit
        </button>
        {isVisible && (
          <div>
            <div className={styles.editForm}>
              <div className={styles.fields_container}>
                <div className={styles.field_container}>
                  <label htmlFor="name">
                    <div>Edit Name</div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      onChange={(e) => editName(e.target.value)}
                      placeholder="Edit Task Name"
                    />
                  </label>
                </div>
                <div className={styles.field_container}>
                  <label htmlFor="description">
                    <div>Edit Description</div>
                    <input
                      type="text"
                      id="description"
                      name="description"
                      onChange={(e) => editDescription(e.target.value)}
                      placeholder="Edit Task Description"
                    />
                  </label>
                </div>
                <div className={styles.field_container}>
                  <label htmlFor="description">
                    <div>Edit Image</div>
                    <input
                      type="text"
                      id="imageUrl"
                      name="imageUrl"
                      onChange={(e) => editImageUrl(e.target.value)}
                      placeholder="Edit Task Image URL"
                    />
                  </label>
                </div>
                <div className={styles.saveChangesButton}>

                    <button
                        className={styles.addNewButton}
                        onClick={
                            handleSubmitEdit=async (event: React.FormEvent) => {
                                event.preventDefault();
                                try {
                                const response = await axios.put(`http://localhost:2004/DEFAULT_BUCKET_LIST_TASKS/${task.id}`, {
                                    name: editedName,
                                    description: description,
                                    imageUrl: imageUrl
                                });
                                console.log(response.data);
                                } catch (error) {
                                console.error(error);
                                }
                                window.location.reload();
                            }
                    }>
                        Save Changes
                    </button>

                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
