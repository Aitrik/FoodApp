import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { search } from '../Redux/Slice';

export default function Header() {
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();
    const navigate=useNavigate()

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchText.trim() !== '') {
            dispatch(search(searchText));
            navigate(`/search/${searchText}`)
            setSearchText(''); // Reset the search text after dispatching the action
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <a className="navbar-brand text-light" href="#">
                Navbar
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">
                            <Link to="/" className="text-light">Home</Link>
                        </a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0"onClick={handleSearch} >
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="Search with Foodname"
                        aria-label="Search"
                    />
                    
                        <button className="btn btn-outline-success my-2 my-sm-0 text-light" type="submit" onClick={handleSearch}>
                            Search
                        </button>
                    
                </form>
            </div>
        </nav>
    );
}
