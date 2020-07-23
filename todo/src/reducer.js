import React from 'react';
import  { ADD_TODO, CLEAR_TODO, TOGGLE_TODO} from './App'



export const initialTodoState = {

    todos: [
        {
            item: "clean",
            completed: false,
            id: 1
        }
        
    ]
}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [
                    ...state.todos,
                        {
                        item: action.payload,
                        completed: false,
                        id: Date.now(),
                        }
                    ]
                }
        case CLEAR_TODO:
            return {
                ...state,
                todo: state.todo.filter(item => !item.completed)
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todo: state.todo.map(item => {
                    if (action.payload === item.id) {
                        return {
                            ...item,
                            completed: !item.completed
                        }
                    }
                return {
                    ...item
                }
                })

            };
        default: 
            return state;
    };
}
