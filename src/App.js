import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=1347e467";

function App() {
  const [movies , setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")
  
    useEffect(() => {
      searchMovies();
    }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    console.log(movies)
  }



  return (
    <div className='app'>
      <h1>XellMovies</h1>

      <div className='search'>
        <input placeholder='Search For Movies' 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt='search'
        onClick={() => { searchMovies(searchTerm)}}
        />
      </div>

      {movies?.length > 0 ? (
        <div className='container'>
        {movies.map((movie) => (
          <div className='conatiner'>
            <MovieCard movie={movie}/>
          </div>
        ))}
      </div>
        ) :
        (
          <h2>No Movies Found</h2>
        )
      }


    </div>
  );
}

export default App;
