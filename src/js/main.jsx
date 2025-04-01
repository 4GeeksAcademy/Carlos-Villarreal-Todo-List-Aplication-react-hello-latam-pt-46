import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import App from './components/App';
import TodoInput from './components/TodoInput';
import TodoItem from './components/Todo Item';
import TodoList from './components/TodoList';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <TodoItem/>
    <TodoInput/>
    <TodoList/>
  </React.StrictMode>,
)
