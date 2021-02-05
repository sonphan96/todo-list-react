import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
  const [ inputText, setInputText ] = useState('');
  const [ todos, setTodos ] = useState([]);

  return (
    <div>
      <header>
        <h1>Todo List</h1>
      </header>
      <Form 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText} 
        inputText={inputText} 
      />
      <TodoList 
        todos={todos} 
        setTodos={setTodos}
      />
    </div>
  )
}

export default App;
