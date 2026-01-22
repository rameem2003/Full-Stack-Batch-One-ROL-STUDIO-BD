import React, { useContext } from "react";
import TodoCard from "./TodoCard";
import { TodoContext } from "../context/TodoContextProvider";

const TodoList = () => {
  let { todos } = useContext(TodoContext);

  return (
    <section>
      {todos.map((item, i) => {
        return <TodoCard key={i} todos={todos} item={item} />;
      })}
    </section>
  );
};

export default TodoList;
