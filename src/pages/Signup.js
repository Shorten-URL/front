import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Signup.css";
import axios from "../api/axios";
const REGISTER_URL = "/signup";

function Signup() {
  const initialValue = {
    username: "",
    password: "",
    email: "",
  };
  const [values, setValues] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({
          username: values.username,
          password: values.password,
          email: values.email,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      setErrors(validation(values));
      setValues(initialValue);
      setMessage(response?.data.message);
    } catch (err) {
      console.log(err);
    }
  };
  const validation = (v) => {
    let error = {};

    if (!v.username) {
      error.username = "이름을 입력하세요.";
    }
    if (!v.email) {
      error.email = "이메일을 입력하세요.";
    }
    if (!v.password) {
      error.password = "비밀번호를 입력하세요.";
    }
    return error;
  };
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Login and start sharing</h2>
          <div className="sub-title">
            <p>이미 계정이 있으신가요?</p>
            <Link to="/Login">로그인</Link>
          </div>
        </div>
        <form className="form-wrapper">
          <div className="email">
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="name">
            <label className="label">Name</label>
            <input
              className="input"
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p className="error">{errors.username}</p>}
          </div>
          <div className="password">
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="message">{message && <p>{message}</p>}</div>
          <div>
            <button className="submit" onClick={handleSubmit}>
              가입하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
