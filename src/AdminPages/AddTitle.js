import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function AddTitle(props) {
  const [showDetail, setShowDetail] = useState(false)
  const [movieIndex, setMovieIndex] = useState(null)
  const [titleExist, setTitleExist] = useState(false)
  const [movieDetails, setMovieDetails] = useState({
    name: "",
      img:"",
      category: "",
      director: "",
      screenplay: "",
      producers: "",
      cast: [],
      releaseDate: "",
      runtime: "",
      budget: "",
      boxOffice: "",
      summary: "",
      link: "",
      likes: 0,
      review: ""
  });
  const { addMovieTitle, moviesList, onHandleEditTitleClick } = props;
  
  function checkTitleMatch(e, title) {
    e.preventDefault()
    setShowDetail(true)
    moviesList.forEach((movie, index) => {
      if(movie.name.toLowerCase() === title.name.toLowerCase()) {
        if( window.confirm("Movie alread exit! Would you like to Edit Movie?")) {
          setTitleExist(true)
          setMovieIndex(index)
          setMovieDetails({
            name: movie.name,
            img: movie.img,
            category: movie.category,
            director: movie.director,
            screenplay: movie.screenplay,
            producers: movie.producers,
            cast: movie.cast,
            releaseDate: movie.releaseDate,
            runtime: movie.runtime,
            budget: movie.budget,
            boxOffice: movie.boxOffice,
            summary: movie.summary,
            link: movie.link,
            review: movie.review
          })
        } else {
          setShowDetail(false)
        }
        
      }
    })
  };
  console.log(movieIndex)
  console.log(showDetail)

  function addTheTitle(e, movie) {
    e.preventDefault()
    console.log("hellow")
    if(titleExist === false) {
    addMovieTitle(movie);
    alert("Movie has been added");
    setMovieDetails({
      name: "",
      img:"",
      category: "",
      director: "",
      screenplay: "",
      producers: "",
      cast: [],
      releaseDate: "",
      runtime: "",
      budget: "",
      boxOffice: "",
      summary: "",
      link: "",
      likes: 0,
      review: "",
    });
  } else {
    let newList = moviesList;
    newList.splice(movieIndex, 1, movieDetails)
    onHandleEditTitleClick(newList, movieDetails);
    setMovieDetails({
      name: "",
      img:"",
      category: "",
      director: "",
      screenplay: "",
      producers: "",
      cast: [],
      releaseDate: "",
      runtime: "",
      budget: "",
      boxOffice: "",
      summary: "",
      link: "",
      likes: 0,
      review: ""
    })
    setMovieIndex(null)
    setShowDetail(false)
    
  }
  }

  return (<>
    { showDetail === true ?(
    <div className="addTitle">
      <Form onSubmit={(e) => addTheTitle(e, movieDetails)}>
        <Form.Group>
          <Form.Label style={{ color: "white", marginLeft: 50 }}>
            Moive Info
          </Form.Label>
          <Form.Control
            onChange={(e) => {
              setMovieDetails({ ...movieDetails, name: e.target.value});
            }}
            value={movieDetails.name}
            type="text"
            placeholder="Title"
          />
        </Form.Group>
        <Form.Label></Form.Label>
        <Form.Group>
          <Form.Control
            onChange={(e) => {
              setMovieDetails({ ...movieDetails, img: e.target.value });
            }}
            value={movieDetails.img}
            type="text"
            placeholder="Image"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            onChange={(e) => {
              setMovieDetails({
                ...movieDetails,
                category: e.target.value.toLowerCase(),
              });
            }}
            value={movieDetails.category}
            type="text"
            placeholder="Category"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            onChange={(e) => {
              setMovieDetails({ ...movieDetails, director: e.target.value });
            }}
            value={movieDetails.director}
            type="text"
            placeholder="Director"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            onChange={(e) => {
              setMovieDetails({ ...movieDetails, screenplay: e.target.value });
            }}
            value={movieDetails.screenplay}
            type="text"
            placeholder="Screenplay"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            onChange={(e) => {
              setMovieDetails({ ...movieDetails, producers: e.target.value });
            }}
            value={movieDetails.producers}
            type="text"
            placeholder="Producers"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            onChange={(e) => {
              setMovieDetails({ ...movieDetails, cast: e.target.value });
            }}
            value={movieDetails.cast}
            type="text"
            placeholder="Cast"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            onChange={(e) => {
              setMovieDetails({ ...movieDetails, releaseDate: e.target.value });
            }}
            value={movieDetails.releaseDate}
            type="text"
            placeholder="Release Date"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            onChange={(e) => {
              setMovieDetails({ ...movieDetails, runtime: e.target.value });
            }}
            value={movieDetails.runtime}
            type="text"
            placeholder="RunTime"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            onChange={(e) => {
              setMovieDetails({ ...movieDetails, budget: e.target.value });
            }}
            value={movieDetails.budget}
            type="text"
            placeholder="Budget"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            onChange={(e) => {
              setMovieDetails({ ...movieDetails, boxOffice: e.target.value });
            }}
            value={movieDetails.boxOffice}
            type="text"
            placeholder="Box Office"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            onChange={(e) => {
              setMovieDetails({ ...movieDetails, summary: e.target.value });
            }}
            value={movieDetails.summary}
            type="text"
            placeholder="Movie Summary"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            onChange={(e) => {
              setMovieDetails({ ...movieDetails, link: e.target.value });
            }}
            value={movieDetails.link}
            type="text"
            placeholder="Link"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            onChange={(e) => {
              setMovieDetails({ ...movieDetails, review: e.target.value });
            }}
            value={movieDetails.review}
            type="text"
            placeholder="Movie Review"
          />
        </Form.Group>
        <Button
          
          variant="primary"
          type="submit"
          style={{ marginTop: 20 }}
        >
          Submit
        </Button>
      </Form>
    </div>) :
    (
      <div className="editTitle">
      <Form onSubmit={(e) => checkTitleMatch(e, movieDetails)}>
        <Form.Group>
          <Form.Label style={{ color: "white" }}>Title to Add/Edit</Form.Label>
          <Form.Control
            onChange={(e) => setMovieDetails({ ...movieDetails, name: e.target.value})}
            value={movieDetails.name}
            type="text"
            placeholder="Title"
          ></Form.Control>
          <Button
            type="submit"
   
            style={{ marginTop: 20 }}
          >
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
    )}
  </>);
}

export default AddTitle;


/// left off making movie update after editing movies

// for editTitle button /* onClick={() => checkTitleMatch(movieDetails)} */