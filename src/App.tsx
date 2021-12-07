import React from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import UserList from './components/UserList/UserList';

function App() {
  return (
    <div className="App">
      <UserList />
      <TodoList/>
    </div>
  );
}

export default App;
