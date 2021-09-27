//after this tutorial: https://www.youtube.com/watch?v=pCA4qpQDZD8 salvat in calc c:/apliReact/todolist
import React, {useState, useEffect} from "react";
import './App.css';
//importing components
import Form from "./componenets/Form";
import TodoList from "./componenets/TodoList";

function App() {

  //State stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

    //Use effect
    useEffect(() => {
      filterHandler();
    }, [todos, status]);

  //Functions 
  const filterHandler = () => {
    switch(status) {
      case "completed": 
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
      break;
      case "uncompleted": 
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
      break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Luciana's Todo List</h1>
      </header>

      <Form 
        inputText = {inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}
      />
      
    <TodoList 
      filteredTodos={filteredTodos}
      setTodos={setTodos} 
      todos={todos}
    />
    </div>
  );
}

export default App;