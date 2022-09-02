import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import customAxios from "./customAxios";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Logout from "./pages/Logout";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";

function App() {
  /*const [ip, setIp] = useState("");
  function callback(data) {
    setIp(data);
    console.log(ip);
  }

   useEffect(() => {
    customAxios("/user", callback);
  }, []);*/
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Logout" element={<Logout />} />
      </Routes>
    </>
  );
}

export default App;
