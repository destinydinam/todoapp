import React, { useEffect, useState } from 'react';
import Form from './components/form/Form';
import Todos from './components/todos/Todos';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(() => {
    const checkingStorage = JSON.parse(localStorage.getItem('todos'));
    // if the localstorage is empty return an empty
    return checkingStorage || [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add the new todo to the todolist and save it in local storage
  const saveNewList = (newList) => {
    setTodos(newList);
    localStorage.setItem('todos', JSON.stringify(newList));
  };
  const handleAdd = () => {
    const id = todos.length && todos[todos.length - 1].id + 1;
    const time = new Date();
    const newTodo = { id, name: input, time };
    const newList = [...todos, newTodo];
    saveNewList(newList);
    setInput('');
  };
  const handleDelete = (id) => {
    const newList = todos.filter((todo) => todo.id !== id);
    saveNewList(newList);
  };

  return (
    <div className="app">
      <h1>Make sure you complete your todos😉</h1>
      <Form input={input} setInput={setInput} handleAdd={handleAdd} />
      <Todos todos={todos} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
