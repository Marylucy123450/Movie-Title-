import React, { useState } from 'react';

const MovieForm = () => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make a POST request to server to add new movie
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      <label>
        Year:
        <input type="number" value={year} onChange={handleYearChange} />
      </label>
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default MovieForm;
