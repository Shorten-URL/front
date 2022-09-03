import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { faBars, faXmark, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthContext from "../context/AuthProvider";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { auth, setAuth } = useContext(AuthContext);
  console.log(auth.values);
  return (
    <div className="Navbar">
      <div className="left">
        <span className="nav-logo">shortener</span>
      </div>
      {!auth.values ? (
        <div className="right">
          <div
            className={`nav-items ${isOpen && "open"}`}
            onClick={() => setIsOpen(false)}
          >
            <Link to="/">홈</Link>
            <Link to="/Login">로그인</Link>
            <Link to="/Signup">회원가입</Link>
            <Link to="/Admin">test</Link>
          </div>
        </div>
      ) : (
        <div className="right">
          <div
            className={`nav-items ${isOpen && "open"}`}
            onClick={() => setIsOpen(false)}
          >
            <Link to="/">홈으로</Link>
            <Link to="/Admin">상세</Link>
            <Link to="/" onClick={() => setAuth({})}>
              로그아웃
            </Link>
          </div>
          <Link to="/Admin" className="item">
            <FontAwesomeIcon icon={faUser} />
            <div className="item-name">{auth.values.username}</div>
          </Link>
        </div>
      )}

      {!isOpen && (
        <div
          className={`nav-bar ${!isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      )}

      {isOpen && (
        <div
          className={`nav-bar ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={faXmark} />
        </div>
      )}
    </div>
  );
}

export default Navbar;
