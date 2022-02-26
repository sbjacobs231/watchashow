import './App.css';
import React, { useEffect, useState } from 'react';
import SearchMovie from './Components/SearchMovie';
import MovieResults from './Components/MovieResults';

function App() {
  // Search Title and optional year
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [movies, setMovies] = useState([]);

  // Fetch movies by Title or Title and Year
  const getMovies = async () => {
    let route = '/mov/list'

    // Search by Title
    if (title !== '') route += `/${title}`;
    // Specifiy by year
    if (year !== '') route += `/${year}`;

    const response = await fetch(route);
    const data = await response.json();

    // Lists only first 10 movie results
    setMovies(data.Search);
    console.log(data);
  }

  useEffect(() => {
    // Do nothing if no title
    if (title === '') return;

    getMovies();
  }, [title, year]);

  return (
    <div className="App">
      <SearchMovie setTitle={setTitle} setYear={setYear}/>
      <MovieResults apiSearchResults={movies}/>
    </div>
  );
}

export default App;
