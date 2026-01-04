import React, { useState } from "react";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
// import { todos } from "./data/todo";

const App = () => {
  const [todos, setTodos] = useState([{ id: 1, todo: "Todo" }]);
  //  [{id: 1, todo: 'Todo'}]

  const updateTodo = (id, newTodo) => {
    // step 1: find the todo item by id
    // step 2: set the updated todo item in the targeted todo id
    setTodos((prev) =>
      prev.map((singleTodo) =>
        singleTodo.id == id ? { ...singleTodo, todo: newTodo } : singleTodo
      )
    );
  };

  return (
    <div>
      <Input setTodos={setTodos} />
      <TodoList setTodos={setTodos} todos={todos} updateTodo={updateTodo} />
    </div>
  );
};

export default App;
