import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import customAxios from "./customAxios";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Logout from "./pages/Logout";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Admin from "./pages/Admin";
import RequireAuth from "./components/RequireAuth";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/Admin" element={<Admin />} />
        </Route>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
