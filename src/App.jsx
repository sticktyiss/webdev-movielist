import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import MovieScreen from "./components/MovieScreen";
import Watchlist from "./components/Watchlist";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [page, setPage] = useState(1);

  const addMovie = (movie) => setWatchList([...watchList, movie]);

  const removeMovie = (movie) => {
    let newState = watchList.filter((mov) => {
      return mov !== movie;
    });
    setWatchList(newState);
  };

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        console.log(res.data.results);
        setMovieList(res.data.results);
      })
      .catch((theseHands) => console.log(theseHands));
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
          addMovie={addMovie}
          watchList={watchList}
          page={page}
          setPage={setPage}
          movieList={movieList}
          removeMovie={removeMovie}
        />
        <Watchlist watchList={watchList} removeMovie={removeMovie} />
      </main>
    </div>
  );
}

export default App;
