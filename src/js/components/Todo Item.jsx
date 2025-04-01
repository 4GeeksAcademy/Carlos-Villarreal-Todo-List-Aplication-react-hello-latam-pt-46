import React, { useState } from 'react';

const TodoItem = ({ task, index, removeTask }) => {
    const [showDelete, setShowDelete] = useState(false);

    return (
        <li
            onMouseEnter={() => setShowDelete(true)}
            onMouseLeave={() => setShowDelete(false)}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', border: '1px solid #ccc', margin: '5px 0' }}
        >
            <span>{task}</span>
            {showDelete && (
                <button 
                    onClick={() => removeTask(index)} 
                    style={{ marginLeft: '10px', cursor: 'pointer' }}
                >
                    Eliminar
                </button>
            )}
        </li>
    );
};

export default TodoItem;