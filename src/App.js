import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
  const [ inputText, setInputText ] = useState('');
  const [ todos, setTodos ] = useState([]);
  const [ status, setStatus ] = useState('all');
  const [ filteredTodos, setFilteredTodos ] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [status, todos])

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => !todo.completed));
        break;
      default:
        setFilteredTodos(todos);
    }
  }

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
        setStatus={setStatus}
      />
      <TodoList 
        todos={todos} 
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  )
}

export default App;
