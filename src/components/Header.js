import { useState } from "react";
import Login from "./Login";

export default function Header(props) {
  const [showLogin, setShowLogin] = useState(false)
  const {admin, adminPass} = props;

  function handleShowLoginClick() {
    setShowLogin(false)
  }

  return (
    <div className="headerContainer">
      <h1>Little's Reviews</h1>
      {showLogin === false ? <p onClick={() => setShowLogin(true)}>Admin Login</p> : <div></div>}
      {showLogin === true ? <Login admin={admin} adminPass={adminPass} onShowLoginClick={handleShowLoginClick} /> : <div></div>}
    </div>
  );
}
