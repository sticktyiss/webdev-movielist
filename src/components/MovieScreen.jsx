import MovieCard from "./MovieCard";

const MovieScreen = (props) => {
  const { addMovie, removeMovie, watchList, page, setPage, movieList } = props;

  const decrement = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };
  const increment = () => {
    setPage(page + 1);
  };
  //Why did incrementing not work? Why page + 1

  const movieDisplay = movieList.map((movie, index) => {
    return (
      <MovieCard
        movie={movie}
        addMovie={addMovie}
        removeMovie={removeMovie}
        watchList={watchList}
      />
    );
  });

  return (
    <div className="page">
      <h1>Tyiss' Movie Theatre</h1>
      <h3>Add a movie to your watchlist!</h3>
      <div className="btn-container">
        <button onClick={decrement}>Previous</button>
        <button onClick={increment}>Next</button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default MovieScreen;
