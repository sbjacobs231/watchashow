import React, { useState } from 'react';
import '../Styles/MovieResult.css';
import Modal from 'react-bootstrap/Modal';

function MovieResult({ apiSearchResult }) {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return(
        <>
            <div onClick={ handleShow }>
                <img src={ apiSearchResult.Poster } alt={ apiSearchResult.imdbID } />
                <p>{ apiSearchResult.Title }</p>
                <p>{ apiSearchResult.Year }</p>
                <p>{ apiSearchResult.Type }</p>
            </div>

            <Modal 
                show={ show } 
                onHide={ handleClose }
                size="xl">
                <Modal.Header closeButton closeLabel=''>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={ apiSearchResult.Poster } alt={ apiSearchResult.imdbID } />
                    <p>{ apiSearchResult.Title }</p>
                    <p>{ apiSearchResult.Year }</p>
                    <p>{ apiSearchResult.Type }</p>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default MovieResult;