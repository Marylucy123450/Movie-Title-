import React, { useState } from "react";

export default function SearchMovie() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovie = async (e) => {
    e.preventDefault();

    const API_KEY = "your_api_key_here";
    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.Search);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={searchMovie}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="ie Jurassic Part"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies.map((movie) => (
          <div className="card" key={movie.imdbID}>
            <img
              className="card--image"
              src={`https://www.imdb.com/title/${movie.imdbID}/?ref_=nv_sr_srsg_0`}
              alt={movie.Title + " poster"}
            />
            <div className="card--content">
              <h3 className="card--title">{movie.Title}</h3>
              <p>
                <small>RELEASED DATE: {movie.Year}</small>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
