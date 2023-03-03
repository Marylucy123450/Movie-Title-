import React from "react";

export default function SearchMovie() {
  
  const searchMovie = async (e) => {
    e.preventDefault(); // prevent default form submission behavior
    console.log("submitting");
  }

  return (
    <form className="form" onSubmit={searchMovie}>
      <label className="label" htmlFor="query">
        Movie Name
      </label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="ie Jurassic Part"
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}
