import React from 'react';

function TaskItem({ task }) {
  return (
    <div className="task-item">
      <div className="task-title">{task.title}</div>
      <div className="task-description">{task.description}</div>
      <div className="task-assignee">{task.assignee}</div>
      <div className="task-due-date">{task.dueDate}</div>
    </div>
  );
}

export default TaskItem;
