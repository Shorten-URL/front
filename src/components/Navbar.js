import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Link to="/">홈으로</Link>
      <Link to="/Login">로그인</Link>
    </>
  );
}

export default Navbar;
