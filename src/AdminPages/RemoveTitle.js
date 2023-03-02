import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function RemoveTitle(props) {
  const [removeTitle, setRemoveTitle] = useState("");
  const { onHandleRemoveMovieTitle } = props;

  function removeTitleFunc(movie) {
    onHandleRemoveMovieTitle(movie);
    setRemoveTitle("");
  }
  return (
    <div className="removeTitle">
      <Form>
        <Form.Group>
          <Form.Label style={{ color: "white" }}>Title to remove</Form.Label>
          <Form.Control
            onChange={(e) => setRemoveTitle(e.target.value)}
            value={removeTitle}
            type="text"
            placeholder="Title"
          ></Form.Control>
          <Button
            onClick={() => removeTitleFunc(removeTitle)}
            type="button"
            variant="primary"
            style={{ marginTop: 20 }}
          >
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default RemoveTitle;
