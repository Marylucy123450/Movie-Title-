import React, { useState, useEffect } from 'react';

const AllMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.themoviedb.org/3');
        if (response.ok) {
          const data = await response.json();
          setMovies(data);
        } else {
          console.error('Failed to fetch movies from server');
        }
      } catch (error) {
        console.error('Failed to fetch movies from server', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>All Movies</h2>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.poster}</p>
          <p>{movie.description}</p>
          <button>Add to My Movies</button>
        </div>
      ))}
    </div>
  );
};

export default AllMovies;
