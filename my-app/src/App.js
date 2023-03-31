import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetailPage from "./pages/MovieDetailPage";


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

      if (response.data.Search) {
        setMovies(response.data.Search);
      }
    };

    fetchMovies();
  }, [searchValue]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              movies={movies}
              handleSearch={handleSearch}
              searchValue={searchValue}
            />
          }
        />
        <Route path="/movie/:imdbID" element={<MovieDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
