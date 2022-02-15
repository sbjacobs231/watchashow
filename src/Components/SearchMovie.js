import React from 'react';
import '../Styles/SearchMovie.css';
import { FaSearch } from 'react-icons/fa';

function SearchMovie({ setTitle, setYear }) {
    // Click submit button will update title and year.
    // And trigger API call.
    const handleSubmit = (event) => {
        event.preventDefault();
        // TEMP CODE UNTIL API SERVICE IS MADE
        const tempTitle = event.target.title.value.toLowerCase();
        setTitle(tempTitle);
        setYear(event.target.year.value);
    }

    return (
        <div>
            <h1>Watchashow</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    id='title-input'
                    name='title'
                    type='text'
                    placeholder='Search by Title'
                />
                <input 
                    id='year-input'
                    name='year'
                    type='text'
                    placeholder='Year'
                />
                <button type='submit'>
                    <FaSearch />
                </button>
            </form>
        </div>
    );
}

export default SearchMovie;