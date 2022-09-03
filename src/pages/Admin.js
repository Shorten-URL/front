import React, { useContext } from "react";
import AuthContext from "../context/AuthProvider";
function Admin() {
  const { auth } = useContext(AuthContext);
  const getData = () => {
    console.log(auth);
  };
  return (
    <div>
      <button onClick={getData}>get</button>
    </div>
  );
}

export default Admin;
