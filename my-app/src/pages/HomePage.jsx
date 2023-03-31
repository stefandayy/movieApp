import React from 'react'
import MovieListComponent from '../components/MovieListComponent';
import NavbarComponent from '../components/NavbarComponent';


const HomePage = (props) => {

    return (
      <div className="page">
        <NavbarComponent searchValue={props.searchValue} handleSearch={props.handleSearch} />
        <MovieListComponent movies={props.movies} />
      </div>
    );
}

export default HomePage