import React from 'react';
import './App.css';
import Counter from './counter/Counter';
import TodoList from './TodoList/TodoList'; // TodoList'; // Make sure to import TodoList

function App() {
  return (
    <div className="App">
      <div>
        <h1>My To-Do App</h1>
        <TodoList />
      </div>
      <div>
        <h1>Simple Counter App</h1>
        <Counter />
      </div>
    </div>
  );
}

export default App;
