const MovieCard = (props) => {
  const [movie] = props;

  return <div className="movie-card">
    <div>
      <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie} />
      <h3>{movie.original_title}</h3>
    </div>
    <button>Add to List</button>
  </div>;
};

export default MovieCard;
