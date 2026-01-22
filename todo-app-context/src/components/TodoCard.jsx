import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContextProvider";

const TodoCard = ({ item }) => {
  let { deleteTodo, updateTodo } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  const handleDelete = () => {
    deleteTodo(item.id);
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
    // console.log("id:", item.id);
    // console.log("newTodo:", newTodo);

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
