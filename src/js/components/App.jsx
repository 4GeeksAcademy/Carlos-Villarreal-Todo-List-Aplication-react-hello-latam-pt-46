import React, { useState } from 'react';

import TodoList from './components/TodoList';

const App = () => {

  const [tasks, setTasks] = useState([]);

  const [inputValue, setInputValue] = useState('');

  const handleKeyPress = (event) => {

    if (event.key === 'Enter' && inputValue.trim() !== '') {

      setTasks([...tasks, inputValue]);

      setInputValue('');

    }

  };


  return (

    <div className="app">

      <h1>Lista de Tareas</h1>

      <input

        type="text"

        value={inputValue}

        onChange={(e) => setInputValue(e.target.value)}

        onKeyPress={handleKeyPress}

        placeholder="Agregar tarea..."

      />

      <TodoList tasks={tasks} setTasks={setTasks} />

      {tasks.length === 0 && <p>No hay tareas, añadir tareas</p>}

    </div>

  );

};


export default App;