import React from "react";
import CompenentOne from "./components/CompenentOne";
import AuthContextProvider from "./context/AuthContext";

const App = () => {
  let name = "John";
  return (
    <div>
      <h1>App Component</h1>

      <CompenentOne name={name} />
    </div>
  );
};

export default App;
