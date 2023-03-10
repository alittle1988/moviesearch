import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Category from "./Categorys/Category";

function SearchBar(props) {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchList, setSearchList] = useState([]);
  const { moviesList, onMovieClick } = props;

  function searchTitleFunc(searchtext) {
    setSearchTitle(searchtext)
    let data = moviesList;
    let newData = [];
    if (searchtext.length > 0) {
      data.forEach((movie) => {
        if (movie.name.toLowerCase().includes(searchtext.toLowerCase())) {
          newData.push(movie);
          setSearchList(newData);
        }
      });
    } else {
        setSearchList([])
    }
    
  }

  return (
    <div className="searchBar">
      <Form>
        <Form.Group style={{ display: "flex", justifyContent: "center" }}>
          <Form.Label></Form.Label>
          <Form.Control
            onChange={(e) => searchTitleFunc(e.target.value)}
            value={searchTitle}
            type="text"
            placeholder="Search"
            style={{ width: "90%" }}
          ></Form.Control>
        </Form.Group>
      </Form>
      {searchList.length > 0  ? <Category name="search" list={searchList} onMovieClick={onMovieClick}/> : <div></div>}
    </div>
  );
}

export default SearchBar;

/// CREATING SEARCH BAR TO DISPLAY MOVIES WITH NAMES THAT CONTAIN SEARCH CRITERIA
