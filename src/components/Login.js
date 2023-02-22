import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function Login(props) {
  const [details, setDetails] = useState({userName: "", password: ""});
  const {onShowLoginClick, login} = props;


  function handleSubmit(e) {
    e.preventDefault()
    login(details)
    console.log(details)
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
            onChange={e => {setDetails({...details, userName: e.target.value})}}
            value={details.userName}
            
            
            
          ></Form.Control>
  </Form.Group>
        <Form.Group>
          <Form.Label style={{ color: "white",paddingTop: 15 }}>Password </Form.Label>
          <Form.Control
            autoFocus
            type="password"
            placeholder="Password"
            style={{ width: 250}}
            onChange={e => {setDetails({...details, password: e.target.value})}}
            value={details.password}
            
            
           
          ></Form.Control>
        </Form.Group>
        <Button style={{marginTop: 15}} type="submit">Login</Button>
        
      </Form>
    </div>
    </>
  );
}
