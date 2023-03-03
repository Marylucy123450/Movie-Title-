import React, { useState, useEffect } from 'react';

const MyMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.example.com/mymovies');
        if (response.ok) {
          const data = await response.json();
          setMovies(data);
        } else {
          console.error('Failed to fetch user\'s movies from server');
        }
      } catch (error) {
        console.error('Failed to fetch user\'s movies from server', error);
      }
    }

    fetchData();
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
