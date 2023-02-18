import React from "react";

function ToDo(props) {
  const deleteHandler = () => {
    props.setTodos(props.todos.filter((el) => el.id !== props.todo.id));
  };

  const completeHandler = () => {
    props.setTodos(
      props.todos.map((item) => {
        if (item.id === props.todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className={`todo ${props.todo.completed ? "completed" : ""}`}>
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check-circle"></i>
      </button>
      <li className="todo-item">{props.text}</li>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fa fa-minus-circle"></i>
      </button>
    </div>
  );
}

export default ToDo;
