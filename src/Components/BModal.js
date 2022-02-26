import Modal from 'react-bootstrap/Modal';

function BModal({ show, handleClose, movieDetails, handleImage }) {
    
    const showRatings = () => {
        if (movieDetails.Ratings === undefined) {
            return <p></p>;
        } else {
            return (
                movieDetails.Ratings.map((rating, i) => {
                    return <p key={i}>{ rating.Source }: { rating.Value }</p>
                })
            )
        }

    }

    return (
        <Modal 
            show={ show } 
            onHide={ handleClose }
            size="xl">
            <Modal.Header closeButton closeLabel=''>
                <Modal.Title>{ movieDetails.Title }</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={ handleImage(movieDetails.Poster) } alt={ movieDetails.imdbID } />
                <p>Released: { movieDetails.Year }</p>
                <p>Type: { movieDetails.Type }</p>
                <p>Actors: { movieDetails.Actors }</p>
                <p>Director: { movieDetails.Director }</p>
                <p>Genre: { movieDetails.Genre }</p>
                <p>Country: { movieDetails.Country }</p>
                <p>Plot: { movieDetails.Plot }</p>
                <p>Runtime: { movieDetails.Runtime }</p>
                <p>Rated: { movieDetails.Rated }</p> 
                { showRatings() }
            </Modal.Body>
        </Modal>
    );
}

export default BModal;