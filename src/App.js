import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './App.css';
import Searchicon from './search.svg';
import { useEffect } from 'react'; 
import MovieCard from './MovieCard';
// 80e3d5a

const API_URL = 'http://omdbapi.com?apikey=80e3d5a';



const App = () => {
    const [searchTerm , setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
    useEffect(() => {
      searchMovies("spiderman");
    }, []);
  

 
  
  const searchMovies = async (title) => {
    const response = await fetch (`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search); 
  };

  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='search'>
        <input placeholder='Search for Movies' 
        value={searchTerm}
        onChange = {(e) => setSearchTerm(e.target.value)} />
      
      <img 
      src={Searchicon}
      alt='search'
      onClick = {() => searchMovies(searchTerm) }/>
      </div>
    { movies?.length > 0 ? (
        <div className='container'>
             {movies.map((movie)=> (
              <MovieCard movie={movie} />
             ))}
        </div>
    ) : (
    <div className='empty'>
      <h2>No Movies Found </h2>
    </div> 
    )}
    </div>
  );
};

export default App;
