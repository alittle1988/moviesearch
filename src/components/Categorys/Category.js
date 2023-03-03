import { Container } from "react-bootstrap";
import MovieCard from "../MovieCard.js";
export default function Category(props) {
  const { name, list, onMovieClick } = props;

  return (
    <>
      <h2
        className="categoryTitle"
        style={{ color: "white" }}
        id={name.toLowerCase()}
      >
        {name}
      </h2>
      <Container className="movieContainer">
        <div className="movieRow">
          {list.map((movie, index) => {
            if (movie.category === name.toLowerCase() || name.toLowerCase() === "search") {
              return (
                <MovieCard
                  onMovieClick={movie => onMovieClick(movie)}
                  movie={movie}
                  key={index}
                ></MovieCard>
              );
            }
          }
          )}
        </div>
      </Container>
    </>
  );
}
