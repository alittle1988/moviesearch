import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Category from "../components/Categorys/Category";

function RemoveTitle(props) {
  const [removeTitle, setRemoveTitle] = useState("");
  const [removeList, setRemoveList] = useState([]);
  const { onHandleRemoveMovieTitle, moviesList } = props;

  function removeTitleFunc(movie) {
    onHandleRemoveMovieTitle(movie);
    setRemoveTitle("");
  }

  //new function
  function removeTitleFunc1(movieTitle) {
    setRemoveTitle(movieTitle)
    let data = moviesList;
    let newData = []
    if(movieTitle.length > 0){
    data.forEach((movie) => {
      if(movie.name.toLowerCase().includes(movieTitle.toLowerCase())) {
        newData.push(movie);
        setRemoveList(newData)
      } 
    })
    } else {
      setRemoveList([])
    }
  }
  console.log(removeList)
  console.log(removeTitle)
  return (
    <div className="removeTitle">
      <Form>
        <Form.Group>
          <Form.Label style={{ color: "white" }}>Title to remove</Form.Label>
          <Form.Control
            onChange={(e) => removeTitleFunc1(e.target.value)}
            value={removeTitle}
            type="text"
            placeholder="Title"
          ></Form.Control>
          <Button
            
            type="button"
            variant="primary"
            style={{ marginTop: 20 }}
          >
            Submit
          </Button>
        </Form.Group>
      </Form>
      {removeList.length > 0 ? <Category name="delete" list={removeList} onMovieClick={removeTitleFunc} /> : <div></div>}
    </div>
  );
}

export default RemoveTitle;
