import React, { useState } from "react";

function SearchMovies({ movies, setFilteredMovies }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filteredMovies);
  };

  return (
    <div className="search-movies">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search movies by title"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchMovies;
