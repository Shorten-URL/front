import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <div className="left">
        <span className="nav-logo">shortener</span>
      </div>
      <div className="right">
        <div className={`nav-items ${isOpen && "open"}`}>
          <Link to="/" className="item">
            홈으로
          </Link>
          <Link to="/Login" className="item">
            로그인
          </Link>
          <Link to="/Signup" className="item">
            회원가입
          </Link>
        </div>
      </div>
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
