import React from "react";
import { Link, useNavigate } from "react-router";

const Home = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>Home Page</h1>

      <button onClick={() => navigate("/contact")}>Go to Contact</button>
    </div>
  );
};

export default Home;
