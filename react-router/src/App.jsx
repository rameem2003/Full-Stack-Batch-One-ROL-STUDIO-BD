import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Product from "./pages/Product";
import Rootlayout from "./Layouts/Rootlayout";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import ProtectedRoute from "./Layouts/ProtectedRoute";
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Rootlayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:productID" element={<Product />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Error />} />
          </Route>
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
