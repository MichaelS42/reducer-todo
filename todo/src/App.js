import  React, { useState, useReducer } from 'react';
import './App.css';
import TodoList from './TodoList'
import TodoForm from './TodoForm';

import { initialTodoState, todoReducer } from "./reducer"


function App() {
  
  const [state, dispatch] = useReducer(todoReducer, initialTodoState);
  const [newTodoItem, setNewTodoItem] = useState("");

    const handleChanges = event => {
      event.preventDefault();
      setNewTodoItem(event.target.value)
    }

    const onSubmit = event => {
      event.preventDefault();
      dispatch({type: "ADD_TODO", payload: newTodoItem})
    }

    const toggleTodo = item => {
      dispatch({ type: "TOGGLE_TODO", payload: item})
    }
    
    const clearCompleted = event => {
      event.preventDefault();
      dispatch({ type: "CLEAR_TODO"})
    }

    return (
      <div className="TodoList">
        <h1>hello</h1>
        <TodoForm
          onSubmit={onSubmit}
          clearCompleted={clearCompleted}
          handleChanges={handleChanges}
          state={state}
        />
        <TodoList
          state={state}
          toggleTodo={toggleTodo}
        />
    </div>
  );
}

export default App;
