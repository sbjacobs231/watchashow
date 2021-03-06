import Modal from 'react-bootstrap/Modal';
import '../Styles/BModal.css';

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
                <div className='details'>
                    <p>Released: { movieDetails.Year }</p>
                    <p>Type: { movieDetails.Type }</p>
                    <p>Actors: { movieDetails.Actors }</p>
                    <p>Director: { movieDetails.Director }</p>
                    <p>Genre: { movieDetails.Genre }</p>
                    <p>Country: { movieDetails.Country }</p>
                    <p>Runtime: { movieDetails.Runtime }</p>
                    <p>Rated: { movieDetails.Rated }</p> 
                    { showRatings() }
                </div>
                <p>Plot: { movieDetails.Plot }</p>
            </Modal.Body>
        </Modal>
    );
}

export default BModal;