import React from "react";
import { Col, Container, Row } from "react-bootstrap";
export default function MovieInfo(props) {
  const { movie, onMovieClick } = props;

  function splitArray(param) {
    let array = param.split(", ");
    array = array.join(", ");

    return array;
  }

  function checkData(data) {
    if (data.length > 0) {
      return data;
    } else {
      return "N/A";
    }
  }

  return (
    <Container className="movieInfo-wrapper">
      <Row>
        <Col>
          <img src={movie.img} alt={`${movie.name} movie Cover`} />
          <h2>
            <a className="movieTitle" href={movie.link}>
              {movie.name}
            </a>
          </h2>
        </Col>
        <Col>
          <h3 className="text-end" onClick={onMovieClick}>
            X
          </h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Review</h2>
          <p>{checkData(movie.review)}</p>
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <Col>
          <h4>Cast:</h4>
          <p>{checkData(movie.cast)}</p>
          <h4>Producers:</h4>
          <p>{checkData(movie.producers)}</p>
          <h4>Director:</h4>
          <p>{checkData(movie.director)}</p>
          <h4>Screenplay:</h4>
          <p>{checkData(movie.screenplay)}</p>
        </Col>
        <Col>
          <h4>Release Date:</h4>
          <p>{checkData(movie.releaseDate)}</p>
          <h4>Runtime:</h4>
          <p>{checkData(movie.runtime)}</p>
          <h4>Budget:</h4>
          <p>{checkData(movie.budget)}</p>
          <h4>Box Office Sales:</h4>
          <p>{checkData(movie.boxOffice)}</p>
        </Col>
      </Row>
    </Container>
  );
}
