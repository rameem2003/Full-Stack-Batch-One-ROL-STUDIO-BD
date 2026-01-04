import React from "react";
import TodoCard from "./TodoCard";

const TodoList = ({ todos, setTodos, updateTodo }) => {
  console.log(todos);

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
