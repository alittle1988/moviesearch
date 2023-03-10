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
      <Container fluid className="movieContainer">
        <div className="movieRow">
          {list.map((movie, index) => {
            if (movie.category === name.toLowerCase() || name.toLowerCase() === "search" || name.toLowerCase() === "delete") {
              return (
                <MovieCard
                  onMovieClick={movie => onMovieClick(movie)}
                  movie={movie}
                  key={index}
                ></MovieCard>
              );
            }else {
              return <div key={index}></div>
            }
          }
          )}
        </div>
      </Container>
    </>
  );
}
