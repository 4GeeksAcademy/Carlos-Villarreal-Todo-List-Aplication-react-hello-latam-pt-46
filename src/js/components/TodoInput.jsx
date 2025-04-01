import React, { useState } from 'react';

const TodoInput = ({ addTask }) => {
    const [inputValue, setInputValue] = useState('');

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && inputValue) {
            addTask(inputValue);
            setInputValue('');
        }
    };

    return (
        <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Agregar nueva tarea"
        />
    );
};

export default TodoInput;