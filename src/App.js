import './App.css';
import React, { useState } from 'react';
import SearchMovie from './Components/SearchMovie';
import MovieResults from './Components/MovieResults';
import apiSearchResults from './data/apiSearchResults';

function App() {
  // Search Title and optional year
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');

  // TEMP CODE UNTIL API SERVICE CREATED
  const filteredResults = apiSearchResults.filter(movie => {
    const tempTitle = movie.Title.toLowerCase();
    const tempYear = movie.Year.toLowerCase();

    return (tempTitle.indexOf(title) > -1 && title !== '') && tempYear.indexOf(year) > -1;
  });

  return (
    <div className="App">
      <SearchMovie setTitle={setTitle} setYear={setYear}/>
      <MovieResults apiSearchResults={filteredResults}/>
    </div>
  );
}

export default App;
