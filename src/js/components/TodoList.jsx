import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, setTasks }) => {
  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} onDelete={() => handleDelete(index)} />
      ))}
    </ul>
  );
};

export default TodoList;