import React from 'react';

const TodoItem = ({ task, onDelete }) => {

  return (

    <li className="todo-item">

      {task}

      <span className="delete-icon" onClick={onDelete}>🗑️</span>

    </li>

  );

};

export default TodoItem;