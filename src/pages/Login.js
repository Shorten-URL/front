import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Signup.css";
function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(values));
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
