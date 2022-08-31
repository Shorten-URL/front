import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import customAxios from "./customAxios";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  const [ip, setIp] = useState("");
  function callback(data) {
    setIp(data);
  }

  useEffect(() => {
    customAxios("/ip", callback);
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
