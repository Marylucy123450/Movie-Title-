
import './App.css';
import SearchMovie from './components/SearchMovie';
import Login from './components/Login';
import MovieForm from './components/MovieForm';
import MyMovies from './components/MyMovies';
import AllMovies from './components/AllMovies';

function App() {
  return (
    <div>
    <Login/>
    <SearchMovie/>
    <MovieForm/>
    <AllMovies/>
    <MyMovies/>
   
    </div>
  );
}

export default App;
