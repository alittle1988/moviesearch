import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function Login(props) {
  

    // validates password 
    function validateForm() {
        return props.user.length && props.pass.length > 0;
    }
    
    function handleSubmit(event) {
        event.preventDefault();

    }
console.log(props.user)
console.log(props.pass)
  return (
    <>
    <div className="Login">
      <Form style={{ marginTop: 50, marginLeft: 50 }} onSubmit={handleSubmit}>
        <Form.Group >
          <Form.Label style={{ color: "white" }}>UserName: </Form.Label>
          <Form.Control
            autoFocus
            placeholder="UserName"
            style={{ width: 250 }}
            value={props.user}
            onChange={props.onUserNameChange}
            
          ></Form.Control>
  </Form.Group>
        <Form.Group>
          <Form.Label style={{ color: "white" }}>Password: </Form.Label>
          <Form.Control
            autoFocus
            type="password"
            placeholder="Password"
            style={{ width: 250}}
            value={props.pass}
            onChange={props.onPasswordChange}
           
          ></Form.Control>
        </Form.Group>
        <Button style={{marginTop: 15}} type="submit" disabled={!validateForm()}>Login</Button>
      </Form>
    </div>
    </>
  );
}
