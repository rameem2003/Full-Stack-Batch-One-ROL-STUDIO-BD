import React, { useState } from "react";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
// import { todos } from "./data/todo";

const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <Input setTodos={setTodos} />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
};

export default App;
