import { useState } from "react";
import { Button } from "react-bootstrap"
import Login from "./Login";

export default function Header(props) {
  const [showLogin, setShowLogin] = useState(false)
  const {login, logout, loggedin} = props

  function handleShowLoginClick() {
    setShowLogin(false)
  }

  return (
    <div className="headerContainer">
      <h1>The Movie Review</h1>
      <Button />
      
      {loggedin === false && showLogin === false ? <p onClick={() => setShowLogin(true)}>Admin Login</p> : <p onClick={() => logout()} className="logout">Log Out</p>}
      {showLogin === true ? <Login login={login} logout={logout}  onShowLoginClick={handleShowLoginClick} /> : <div></div>}
    </div>
  );
}
