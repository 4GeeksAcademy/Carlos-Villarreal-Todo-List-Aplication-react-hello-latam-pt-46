import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

const App = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, { id: Date.now(), text: task }]);
    };

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div>
            <h1>Lista de TODO</h1>
            <TodoInput addTask={addTask} />
            <TodoList tasks={tasks} removeTask={removeTask} />
            {tasks.length === 0 && <p>No hay tareas, añadir tareas</p>}
        </div>
    );
};

export default App;