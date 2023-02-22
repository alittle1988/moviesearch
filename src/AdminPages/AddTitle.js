import React, {useState} from "react";
import { Button, Form } from "react-bootstrap";

function AddTitle(props) {
  const [movieDetails, setMovieDetails] = useState({
    name:"",
    category:"",
    director:"",
    screenplay:"",
    producers:"",
    cast:[],
    releaseDate:"",
    runtime:"",
    budget:"",
    boxOffice:"",
    summary:"",
    link:"",
    likes:0,
    review:""
  });
  const {moviesList, addMovieTitle} = props;
  console.log(movieDetails)

  function addMovie(e) {
    e.preventDefalut()
    console.log("working")
    //addMovieTitle(movieDetails)
  }
  
  
  return <div className="addTitle">
    <Form onSubmit={(e) => addMovieTitle(movieDetails)}>
      <Form.Group>
        <Form.Label>Moive Title</Form.Label>
        <Form.Control onChange={e => {setMovieDetails({...movieDetails, name:e.target.value })}} value={movieDetails.name} type="text" placeholder="Movie Title" />
      </Form.Group>
      <Form.Group>
        <Form.Label></Form.Label>
        <Form.Control onChange={e => {setMovieDetails({...movieDetails, category:e.target.value })}} value={movieDetails.category} type="text" placeholder="Category" />
      </Form.Group>
      <Form.Group>
        <Form.Label></Form.Label>
        <Form.Control onChange={e => {setMovieDetails({...movieDetails, director:e.target.value })}} value={movieDetails.director} type="text" placeholder="Director" />
      </Form.Group>
      <Form.Group>
        <Form.Label></Form.Label>
        <Form.Control onChange={e => {setMovieDetails({...movieDetails, screenplay:e.target.value })}} value={movieDetails.screenplay} type="text" placeholder="Screenplay" />
      </Form.Group>
      <Form.Group>
        <Form.Label></Form.Label>
        <Form.Control onChange={e => {setMovieDetails({...movieDetails, producers:e.target.value })}} value={movieDetails.producers} type="text" placeholder="Producers" />
      </Form.Group>
      <Form.Group>
        <Form.Label></Form.Label>
        <Form.Control onChange={e => {setMovieDetails({...movieDetails, cast:e.target.value })}} value={movieDetails.cast} type="text" placeholder="Cast" />
      </Form.Group>
      <Form.Group>
        <Form.Label></Form.Label>
        <Form.Control onChange={e => {setMovieDetails({...movieDetails,releaseDate: e.target.value })}} value={movieDetails.releaseDate} type="text" placeholder="Release Date" />
      </Form.Group>
      <Form.Group>
        <Form.Label></Form.Label>
        <Form.Control onChange={e => {setMovieDetails({...movieDetails, runtime:e.target.value })}} value={movieDetails.runtime} type="text" placeholder="RunTime" />
      </Form.Group>
      <Form.Group>
        <Form.Label></Form.Label>
        <Form.Control onChange={e => {setMovieDetails({...movieDetails, budget:e.target.value })}} value={movieDetails.budget} type="text" placeholder="Budget" />
      </Form.Group>
      <Form.Group>
        <Form.Label></Form.Label>
        <Form.Control onChange={e => {setMovieDetails({...movieDetails, boxOffice:e.target.value })}} value={movieDetails.boxOffice} type="text" placeholder="Box Office" />
      </Form.Group>
      <Form.Group>
        <Form.Label></Form.Label>
        <Form.Control onChange={e => {setMovieDetails({...movieDetails, summary:e.target.value })}} value={movieDetails.summary} type="text" placeholder="Movie Summary" />
      </Form.Group>
      <Form.Group>
        <Form.Label></Form.Label>
        <Form.Control onChange={e => {setMovieDetails({...movieDetails, link:e.target.value })}} value={movieDetails.link} type="text" placeholder="Link" />
      </Form.Group>
      <Form.Group>
        <Form.Label></Form.Label>
        <Form.Control onChange={e => {setMovieDetails({...movieDetails, review:e.target.value })}} value={movieDetails.review} type="text" placeholder="Movie Review" />
      </Form.Group>
      <Button variant="primary" type="submit" style={{marginTop: 20}}>Submit</Button>
    </Form>
  </div>;
}

export default AddTitle;
