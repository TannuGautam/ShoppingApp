import React, {useState} from 'react';
import searchimage from '../images/search.png'

const SearchBar = () => {
    return (
        <div className='search-main'>
            <input type = 'search' placeholder = "Search" className = "search-field"></input>
            <button type="submit" className="search-button">Hello</button>
        </div>
    )
}

export default SearchBar
