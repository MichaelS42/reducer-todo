import React from 'react';

const TodoList = props => {

    return (
        <div ClassName="TodoList">
            {props.state.todos.map(todos => {
                return (
                    <div
                    key={todos.id}
                    onClick={() => { props.toggleItem(todos.id) }}
                    className={`todos${todos.finished ? "finished" : ""}`}>
                </div>)
            }
            )}
        </div>
    )

        }
export default TodoList
