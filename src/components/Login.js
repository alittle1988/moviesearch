import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function Login(props) {
  const [adminInput, setAdminInput] = useState("");
  const [adminPassInput, setAdminPassInput] = useState("");
  const {onShowLoginClick} = props

  function handleAdminInputChange(e) {
    setAdminInput(e.target.value)
  }
  function handleAdminPassInputChange(e) {
    setAdminPassInput(e.target.value)
  }


    // validates password 
    function validateForm() {
        return adminInput.length && adminPassInput.length > 0;
    }
    
    function handleSubmit(event) {
        event.preventDefault();

    }
  return (
    <>
    <div className="Login">
      <Form style={{ marginTop: 5, marginLeft: 50 }} onSubmit={handleSubmit}>
      <h4 onClick={onShowLoginClick}>X</h4>
        <Form.Group >
          <Form.Label style={{ color: "white" }}>UserName </Form.Label>
          <Form.Control
            autoFocus
            placeholder="UserName"
            style={{ width: 250 }}
            onChange={handleAdminInputChange}
            
            
          ></Form.Control>
  </Form.Group>
        <Form.Group>
          <Form.Label style={{ color: "white",paddingTop: 15 }}>Password </Form.Label>
          <Form.Control
            autoFocus
            type="password"
            placeholder="Password"
            style={{ width: 250}}
            onChange={handleAdminPassInputChange}
            
           
          ></Form.Control>
        </Form.Group>
        <Button style={{marginTop: 15}} type="submit" disabled={!validateForm()}>Login</Button>
        
      </Form>
    </div>
    </>
  );
}
