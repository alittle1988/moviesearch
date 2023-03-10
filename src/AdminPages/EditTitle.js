import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function EditTitle(props) {
  const [editedTitle, setEditedTitle] = useState("");
  const [titleExist, setTitleExist] = useState(false)
  const { onHandleEditTitleClick, moviesList } = props;


  function checkTitleMatch(title) {
    moviesList.forEach((movie) => {
      if(movie.name.toLowerCase() === title.toLowerCase()) {
        setTitleExist(true)
        console.log("Its Working i think")
        
      }
    })
  };
    console.log(titleExist)

  function handleSubmitClick(title) {
    onHandleEditTitleClick(title);
    setEditedTitle("")
  }
console.log(editedTitle)
  return (<>
    { titleExist === false ? (
    <div className="editTitle">
      <Form>
        <Form.Group>
          <Form.Label style={{ color: "white" }}>Title to Edit</Form.Label>
          <Form.Control
            onChange={(e) => setEditedTitle(e.target.value)}
            value={editedTitle}
            type="text"
            placeholder="Title"
          ></Form.Control>
          <Button
            type="button"
            onClick={() => checkTitleMatch(editedTitle)}
            style={{ marginTop: 20 }}
          >
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
    ) :<div></div>
    }</>);
};


export default EditTitle

