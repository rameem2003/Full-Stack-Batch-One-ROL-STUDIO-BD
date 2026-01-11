import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// 1. use the context
const ComponentTwo = () => {
  let data = useContext(AuthContext);
  return (
    <div style={{ padding: "10px", border: "1px solid red" }}>
      <h1>Component Two</h1>
      <h2>Email: {data.userObject.email}</h2>
      <img src={data.userObject.avater} alt="" />
    </div>
  );
};

export default ComponentTwo;
