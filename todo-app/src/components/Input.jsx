import React, { useState } from "react";

const Input = ({ setTodos }) => {
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = () => {
    let data = {
      id: Date.now(),
      todo,
    };

    setTodos((prev) => [...prev, data]);
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
