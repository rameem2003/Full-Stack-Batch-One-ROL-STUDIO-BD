import React, { useState } from "react";
import { createContext } from "react";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || [],
  );

  const addNewTodo = (newTodo) => {
    console.log(newTodo);

    setTodos((prev) => [...prev, newTodo]);

    let presLocalStorage = JSON.parse(localStorage.getItem("todos")) || [];
    presLocalStorage.push(newTodo);

    localStorage.setItem("todos", JSON.stringify(presLocalStorage));
  };

  const deleteTodo = (id) => {
    let filter = todos.filter((todo) => todo.id !== id);
    setTodos(filter);
  };

  const updateTodo = (id, newTodo) => {
    // step 1: find the todo item by id
    // step 2: set the updated todo item in the targeted todo id
    setTodos((prev) =>
      prev.map((singleTodo) =>
        singleTodo.id == id ? { ...singleTodo, todo: newTodo } : singleTodo,
      ),
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addNewTodo, deleteTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
