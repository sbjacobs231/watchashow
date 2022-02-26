import React, { useState } from 'react';
import '../Styles/MovieResult.css';
import BModal from './BModal';

function MovieResult({ apiSearchResult }) {
    // Handle image if it is NA
    const handleImage = (imgSrc) => {
        return imgSrc === 'N/A' ? './imgs/no_poster.png' : imgSrc;
    }
    
    // Modal Logic
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Get Movie Details
    const [movieDetails, setMovieDetails] = useState({});

    const getDetails = async() => {
        const response = await fetch(`/mov/${apiSearchResult.imdbID}`);
        const data = await response.json();
        console.log(data);
        setMovieDetails(data);
        handleShow();
    }
    
    return(
        <>
            <div className='listing' onClick={ getDetails }>
                <img src={ handleImage(apiSearchResult.Poster) } alt={ apiSearchResult.imdbID } />
                <p>{ apiSearchResult.Title }</p>
                <p>{ apiSearchResult.Year }</p>
                <p>{ apiSearchResult.Type }</p>
            </div>

            <BModal 
                show={show} 
                handleClose={ handleClose } 
                movieDetails={ movieDetails } 
                handleImage={ handleImage } />
        </>
    );
}

export default MovieResult;