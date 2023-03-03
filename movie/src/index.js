import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovie from './components/SearchMovie';
import Login from './components/Login';
import MovieForm from './components/MovieForm';
import MyMovies from './components/MyMovies';
import AllMovies from './components/AllMovies';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchMovie />
    <Login/>
    <MovieForm/>
    <MyMovies/>
    <AllMovies/>
    <App />
  </React.StrictMode>
);

reportWebVitals();
