import React from "react";
import { Col, Container, Row } from "react-bootstrap";
export default function MovieInfo(props) {
  const { movie, onMovieClick } = props;
  
  return (
    <Container className="movieInfo-wrapper">
      <Row>
        <Col>
          <img src={movie.img} alt={`${movie.name} movie Cover`} />
          <h2>
            <a href={movie.link}>{movie.name}</a>
          </h2>
        </Col>
        <Col>
        <h2>Summary</h2>
          <p>{movie.summary}</p>
        </Col>
        <Col>
          <h3 className="text-end" onClick={onMovieClick}>X</h3>
        </Col>
      </Row>
      <Row >
        <Col>
        <h4>Cast</h4>
        <p>{movie.cast.join(", ")}</p>
        <h4>Director</h4>
        <p>{movie.director}</p>
        <h4>Screenplay</h4>
        {movie.screenplay.length > 0 ? <p>{movie.screenplay.join(", ")}</p> : <p>N/A</p>}
        </Col>
        <Col>
            <h4>Release Date</h4>
            <p>{movie.releaseDate}</p>
            <h4>Runtime</h4>
            <p>{movie.runtime}</p>
            <h4>Budget</h4>
            <p>{movie.budget}</p>
            <h4>Box Office Sales</h4>
            <p>{movie.boxOffice}</p>
        </Col>
      </Row>
      
    </Container>
  );
}
