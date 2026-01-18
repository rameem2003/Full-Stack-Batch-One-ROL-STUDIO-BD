import React, { useContext } from "react";
import TodoCard from "./TodoCard";
import { TodoContext } from "../context/TodoContextProvider";

const TodoList = ({ setTodos, updateTodo }) => {

  let {todos} = useContext(TodoContext)

  return (
    <section>
      {/* () => {} */}

      {/* {todos.map((item, i) =)} */}

      {todos.map((item, i) => {
        return (
          <TodoCard
            updateTodo={updateTodo}
            setTodos={setTodos}
            todos={todos}
            item={item}
          />
        );
      })}
    </section>
  );
};

export default TodoList;
