import React, { useContext, useState } from "react";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import { TodoContext } from "./context/TodoContextProvider";
// import { todos } from "./data/todo";

const App = () => {
  // const doSomeThing = () => {
  //   let array = [
  //     { id: 1, name: "ANIK" },
  //     { id: 2, name: "Rameem" },
  //   ];

  //   localStorage.setItem("data", JSON.stringify(array));
  // };

  // // get the data from the local storage
  // let data = JSON.parse(localStorage.getItem("data"));
  // console.log(data[0]);

  return (
    <div>
      <Input />
      <TodoList />

      {/* <button onClick={doSomeThing}>Add</button> */}
    </div>
  );
};

export default App;
