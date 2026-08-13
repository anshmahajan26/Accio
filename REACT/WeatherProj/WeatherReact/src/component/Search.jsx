import { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleInput = (e) => {
        setSearch(e.target.value);
    }

    const searchWeather = () => {
        if (!search.trim()) return;
        navigate(`/weather/${encodeURIComponent(search.trim())}`);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            searchWeather();
        }
    }

    return (
        <>
            <div>
                <div className='search-section'>
                    <svg
                        onClick={searchWeather}
                        style={{ cursor: 'pointer', width: '24px', height: '24px' }}
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                    </svg>
                    <input
                        type="text"
                        placeholder="Search for a city"
                        value={search}
                        onChange={handleInput}
                        onKeyDown={handleKeyDown}
                    />
                </div>
            </div>
        </>
    )
}
export default Search;