export default function MovieCard(props) {
  const { onMovieClick, movie } = props;

  return (
    <>
      <div className="img-div">
        <img
          src={movie.img}
          alt={movie.name}
          className="movieImg"
          onClick={() => onMovieClick(movie)}
        />
      </div>
    </>
  );
}
