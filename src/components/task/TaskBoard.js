import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaskBoard() {
  const [columns, setColumns] = useState([]);
  const [error, setError] = useState('');

  const fetchTaskBoardData = () => {
    axios
      .get('https://chat-app-myways.onrender.com/api/task/board')
      .then((response) => {
        setColumns(response.data.columns);
      })
      .catch((error) => {
        setError('Failed to retrieve Kanban board data.');
      });
  };

  useEffect(() => {
    fetchTaskBoardData();
  }, []);

  return (
    <div>
      <h2>Task Board</h2>
      {error && <p>{error}</p>}
      <div className="kanban-board">
        {columns.map((column, index) => (
          <div key={index} className="kanban-column">
            <h3>{column.title}</h3>
            <ul>
              {column.tasks.map((task, taskIndex) => (
                <li key={taskIndex} className="kanban-task">
                  {task.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskBoard;
