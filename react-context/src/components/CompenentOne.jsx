import React, { useContext, useState } from "react";
import ComponentTwo from "./ComponentTwo";
import { AuthContext } from "../context/AuthContext";

// use the context

const CompenentOne = () => {
  const [newName, setNewName] = useState("");
  let data = useContext(AuthContext);

  // console.log(data);

  const handleClick = () => {
    // console.log("click");

    data.renameUser(newName);
  };

  return (
    <div style={{ padding: "10px", border: "1px solid black" }}>
      <h1>Component One Name: {data.userObject.name}</h1>
      <input
        type="text"
        name=""
        id=""
        placeholder="Update Name"
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={handleClick}>Update</button>

      <ComponentTwo />
    </div>
  );
};

export default CompenentOne;
