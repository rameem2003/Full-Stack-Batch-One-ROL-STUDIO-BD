import React, { useState } from "react";

const TodoCard = ({ item, todos, setTodos, updateTodo }) => {
  const [newTodo, setNewTodo] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const handleDelete = () => {
    let newData = todos.filter((todo) => todo.id !== item.id);
    setTodos(newData);
    // console.log(newData);
  };

  const handleUpdateUi = () => {
    setIsUpdate(true);
  };

  const handleClose = () => {
    setIsUpdate(false);
  };

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleNewTodoUpdate = () => {
    console.log("id:", item.id);
    console.log("newTodo:", newTodo);

    updateTodo(item.id, newTodo);
    setIsUpdate(false);
  };

  // ! = =

  // conditional (Update UI)
  if (isUpdate) {
    return (
      <div>
        <input onChange={handleChange} type="text" placeholder="Update Field" />
        <button onClick={handleNewTodoUpdate}>Update</button>
        <button onClick={handleClose}>X</button>
      </div>
    );
  }

  // main ui
  return (
    <div>
      <span>{item.todo}</span>

      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleUpdateUi}>Edit</button>
    </div>
  );
};

export default TodoCard;
