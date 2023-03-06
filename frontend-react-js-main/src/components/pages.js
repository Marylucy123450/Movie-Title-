import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./pages.css";
import SearchMovies from "./SearchMovies";

function Pages() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    director: "",
    release_date: "",
  });

  useEffect(() => {
    fetch("https://api.npoint.io/4d3a53522a05bc190186/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  const handleDeleteMovie = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  const handleAddMovie = () => {
    const newMovieWithId = {
      ...newMovie,
      id: movies.length + 1,
    };
    setMovies([...movies, newMovieWithId]);
    setFilteredMovies([...filteredMovies, newMovieWithId]);
    setNewMovie({
      title: "",
      description: "",
      director: "",
      release_date: "",
    });
  };

  return (
    <div>
      <Link to="/homepage">
        <button className="btn btn-success">Logout</button>
      </Link>
      <div className="container movies">
        <span>
          <p className="fs-4 text-white bg-danger">LET'S DO THIS!</p>
          <div className="add-movie">
            <input
              type="text"
              value={newMovie.title}
              onChange={(e) =>
                setNewMovie({ ...newMovie, title: e.target.value })
              }
              placeholder="Title"
            />
            <input
              type="text"
              value={newMovie.description}
              onChange={(e) =>
                setNewMovie({ ...newMovie, description: e.target.value })
              }
              placeholder="Description"
            />
            <input
              type="text"
              value={newMovie.director}
              onChange={(e) =>
                setNewMovie({ ...newMovie, director: e.target.value })
              }
              placeholder="Director"
            />
            <input
              type="date"
              value={newMovie.release_date}
              onChange={(e) =>
                setNewMovie({ ...newMovie, release_date: e.target.value })
              }
            />
            <button onClick={handleAddMovie}>Add Movie</button>
          </div>
          <SearchMovies movies={movies} setFilteredMovies={setFilteredMovies} />
        </span>
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="movie">
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <p>Director: {movie.director}</p>
            <p>Released: {movie.release_date}</p>
            <button onClick={() => handleDeleteMovie(movie.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pages;
