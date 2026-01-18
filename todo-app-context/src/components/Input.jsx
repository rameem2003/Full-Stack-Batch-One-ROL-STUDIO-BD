import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContextProvider";

const Input = () => {
  let {addNewTodo} =  useContext(TodoContext)
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = () => {
    let data = {
      id: Date.now(),
      todo,
    };

   addNewTodo(data)
  };

  return (
    <section>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Enter Your Task"
      />
      <button onClick={handleSubmit}>Add Task</button>
    </section>
  );
};

export default Input;
