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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://api.npoint.io/00329fcf520d620e67e9/films/`);

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // Handle successful response
        // ...
      } else {
        // Handle failed response
        // ...
      }
    } catch (error) {
      console.error(error);
      // Handle error
      // ...
    }
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
