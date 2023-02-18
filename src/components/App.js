import React from "react";
import { useState, useEffect } from "react";
import Form from "./Form";
import ToDoList from "./ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos()
  }, [])

  useEffect(() => {
    filterHandler(todos);
    saveLocalTodos();
  }, [todos, status]) //eslint-disable-line
  

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
      
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break;

      default:
        setFilteredTodos(todos)
        break;
    }
  }


  // Save to Local Storage

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") == null){
      localStorage.setItem("todos", JSON.stringify([]))
    }else{
      setTodos(JSON.parse(localStorage.getItem("todos")))
    }
  }

  return (
    <div className="App">
      <header>
        <h1>My To Do List</h1>
      </header>

      <Form inputText={inputText}
            setInputText={setInputText}
            todos = {todos}
            setTodos = {setTodos}
            setStatus= {setStatus}>
      </Form>
      

      <ToDoList todos={todos}
                setTodos={setTodos}
                filteredTodos={filteredTodos}>
      </ToDoList>
    </div>
  );
}

export default App;
