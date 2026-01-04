import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [todos, setTodos] = useState([]);
  const fetchTodos = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await response.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, [count, name]);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>CLick</button>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
};

export default App;
