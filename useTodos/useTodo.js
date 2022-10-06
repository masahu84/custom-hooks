import { useEffect, useReducer } from "react";
import { totoReducer } from "../08-useReducer/todoReducer";


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer( totoReducer, [], init );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) );
    }, [todos]);

    const handleNewTodo = ( todo ) => {
        const action = {
            type: "[TODO] Add Todo",
            payload: todo
        }

        dispatch( action )
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: "[TODO] Remove Todo",
            payload: id
        });
    }

    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

    

    return {
        todos, 
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo,
        todosCount: todos.length,
        todosPendingCount: todos.filter( todo => !todo.done).length
    }


  
}
