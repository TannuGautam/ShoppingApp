import e from 'cors';
import React,{useState} from 'react';
import menuicon from '../images/menu-icon.png'

const NavBar = ({setFilter, dataSearch}) => {
    const [searchText, setSearchText] = useState('');
    const [clickM, setclickM] = useState(false);
    

    const searchTextHandle = (e) => {
        setSearchText(e.target.value);
    }
    // console.log(searchText);

    const searchSubmitHandler = () =>{
        // if(searchText !== "" )
        // {
            setFilter(searchText);
        // }
        // else
        // {
        //     console.log("no item");
        // }
        
    }

    return (
        
        <div className='header1'>
            <div className='logo'>Myntra Dummy</div>
            <div className='navSection' id = {clickM ? "hidden" : ""}>
                <div className='header-mwk'>MEN</div>
                <div className='header-mwk'>WOMEN</div>
                <div className='header-mwk'>KIDS</div>
            </div>
            
            <div className='search-main'>
            {/* onChange = { searchTextHandle }  */}
                <input type = 'search' value = {searchText} onChange = { searchTextHandle } placeholder = "Search" className = "search-field"></input>
                <button type="submit"  onClick = {searchSubmitHandler} className="search-button">Search</button>
            </div>
            <img src = {menuicon} onClick={() => {setclickM(!clickM)}}></img>

        </div>
    )
}

export default NavBar
