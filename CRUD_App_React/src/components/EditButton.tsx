import React from 'react';
import Task from './type';
import { Tasks } from './Tasks';
import styles from './stylesForComponents/Items.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

interface TaskItemProps {
  task: Task;
}

export const EditButton: React.FC<TaskItemProps> = ({ task }) => {
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
  
    return console.log('jooo')
}