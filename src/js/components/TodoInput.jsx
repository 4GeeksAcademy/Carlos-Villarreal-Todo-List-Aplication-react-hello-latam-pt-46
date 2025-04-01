import React from 'react';

const TodoInput = ({ inputValue, setInputValue, addTask }) => {
    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && inputValue) {
            addTask(inputValue);
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