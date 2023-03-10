import { useEffect, useState } from "react";
import "./App.css";
import MovieListComponent from "./components/MovieListComponent";
import NavbarComponent from "./components/NavbarComponent";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("avengers");

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    const fetchMovies = async () => {
     
        const response = await axios.get(
          `https://www.omdbapi.com/?s=${searchValue}&apikey=1f09a29b`
        );

        if(response.data.Search){
          setMovies(response.data.Search);
        } 
      }

    fetchMovies();
  }, [searchValue]);

  return (
    <>
      <NavbarComponent searchValue={searchValue} handleSearch={handleSearch} />
      <MovieListComponent movies={movies} />
    </>
  );
}

export default App;
