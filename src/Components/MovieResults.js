import React from 'react';
import '../Styles/MovieResults.css';
import MovieResult from './MovieResult';

function MovieResults({ apiSearchResults }) {
    return(
        <div>
            {
                apiSearchResults.map(apiSearchResult => {
                    return (
                        <MovieResult 
                            apiSearchResult={apiSearchResult}
                            key={apiSearchResult.imdbID}
                        />
                    )
                })
            }
        </div>
    );
}

export default MovieResults;