import React, { useState, useEffect } from 'react';

const AllMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Make a GET request to server to fetch all movies
    // Set the response from the server to the movies state
    setMovies(/*response from server*/);
  }, []);

  return (
    <div>
      <h2>All Movies</h2>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <button>Add to My Movies</button>
        </div>
      ))}
    </div> // This closing tag was missing
  );
};

export default AllMovies;
