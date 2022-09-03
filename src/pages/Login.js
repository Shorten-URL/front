import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../css/Signup.css";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";

const LOGIN_URL = "/signin";
function Login() {
  const initialValue = {
    username: "",
    password: "",
  };
  const [values, setValues] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const { setAuth } = useContext(AuthContext);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({
          username: values.username,
          password: values.password,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response.data);
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setErrors(validation(values));
      setValues(initialValue);
      //setAuth({ values, roles, accessToken });
    } catch (err) {
      console.log(err);
    }
  };
  const validation = (v) => {
    let error = {};

    if (!v.username) {
      error.username = "이름을 입력하세요.";
    }
    if (!v.password) {
      error.password = "비밀번호를 입력하세요.";
    } else if (v.password.length < 6) {
      error.password = "6글자 이상 입력하세요.";
    }
    return error;
  };
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Sign up and start shortening</h2>
          <div className="sub-title">
            <p>계정이 없으신가요?</p>
            <Link to="/Signup">회원가입</Link>
          </div>
        </div>
        <form className="form-wrapper">
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
          <div>
            <button className="submit" onClick={handleSubmit}>
              로그인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
