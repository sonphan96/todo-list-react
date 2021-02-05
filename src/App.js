import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
  const [ inputText, setInputText ] = useState('');
  return (
    <div>
      <header>
        <h1>Todo List</h1>
      </header>
      <Form setInputText={setInputText} />
      <TodoList />
    </div>
  )
}

export default App;