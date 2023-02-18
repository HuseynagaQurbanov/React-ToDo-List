import React, {useState} from "react";


function Form({inputText, setInputText, todos, setTodos, setStatus}) {
    const [alertWarning, setAlertWarning] = useState(false);
    const [alertSuccess, setAlertSuccess] = useState(false);

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    const submitToDoHandler = (e) => {
        e.preventDefault();

        const isEmpty = (str) => !str.trim().length;

        if(isEmpty(inputText)){
            setAlertWarning(true);
            setTimeout(() => {
                setAlertWarning(false);
            }, 1000)
        }else{
            setAlertSuccess(true);
            setTimeout(() => {
                setAlertSuccess(false);
            }, 1000)

            setTodos([
                ...todos,
                {text: inputText, completed: false, id: Math.random()}
            ]);
            setInputText("");
        }
    }

  return (
    <form onSubmit={submitToDoHandler}>
        <div className="search">
            <input value={inputText} type="text" className="todo-input" placeholder="Add..." onChange={inputTextHandler}/>
            <button className="todo-button" type="submit">
                <i className="fa-solid fa-circle-plus"></i>
            </button>
        </div>
        <div className="select">
            <select name="todos" className="filter-todo" onChange={statusHandler}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
        <div className="alert-wrapper">
            {alertWarning ? <div className="alert-warning">
                <div>Please enter a value</div>
            </div> : ""}

            {alertSuccess ? <div className="alert-success">
                <div>List item added...</div>
            </div> : ""}
        </div>
    </form>
  );
}

export default Form;
