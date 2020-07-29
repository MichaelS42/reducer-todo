import React from 'react';

const TodoForm = props => {

    return(

    <div>
     <form>
        <input type="search"
            value={props.taskInput}
          name="taskInput"
          onChange={props.handleChanges}
         placeholder={"add new item"}
        />

          <button onClick={event => {props.onSubmit(event)}}> Add todo</button>
          <button onClick={event => {props.clearCompleted(event)}}> clear</button>

        </form>
    </div>
    )
}

export default TodoForm