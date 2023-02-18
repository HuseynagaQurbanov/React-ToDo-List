import React from "react";
import ToDO from "./ToDo";

function ToDoList(props) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.filteredTodos.map((todo) => (
          <ToDO text={todo.text}
                key={todo.id}
                todo = {todo}
                todos={props.todos}
                setTodos={props.setTodos}>
          </ToDO>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
