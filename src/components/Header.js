import { useState } from "react";
import Login from "./Login";

export default function Header(props) {
  const [showLogin, setShowLogin] = useState(false)
  const {login} = props

  function handleShowLoginClick() {
    setShowLogin(false)
  }

  return (
    <div className="headerContainer">
      <h1>Little's Reviews</h1>
      {showLogin === false ? <p onClick={() => setShowLogin(true)}>Admin Login</p> : <div></div>}
      {showLogin === true ? <Login login={login}  onShowLoginClick={handleShowLoginClick} /> : <div></div>}
    </div>
  );
}
