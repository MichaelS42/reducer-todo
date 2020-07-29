import React from 'react';

const TodoList = props => {

    return (
        <div ClassName="TodoList">
            {props.state.todos.map(todos => {
                return (
                    <div
                    key={todos.id}
                    onClick={() => props.toggleTodo(todos.id) }
                    className={`todos${todos.finished ? "finished" : ""}`}>
                    <p>{todos.item}</p>
                </div>)
            }
            )}
        </div>
    )

        }
export default TodoList;
