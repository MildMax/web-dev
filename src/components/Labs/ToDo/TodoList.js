import TodoItem from "./TodoItem";
import todos from "./todos.json";
import React from "react";

const TodoList = () => {
    return(
        <>
            <h2>Todo List</h2>
            <ul>
                {
                    todos.map(todo => {
                        return(<TodoItem todo={todo}/>);
                    })
                }
            </ul>
        </>
    );
}
export default TodoList;
