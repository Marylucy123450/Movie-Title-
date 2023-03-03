import React, { useState, useEffect } from 'react';

const MyMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Make a GET request to server to fetch user's movies
    setMovies(/*response from server*/);
  }, []);

  return (
    <div>
      <h2>My Movies</h2>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <button>Delete</button>
          <button>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default MyMovies;
