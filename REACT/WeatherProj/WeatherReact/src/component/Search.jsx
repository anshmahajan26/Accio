import { useState } from 'react';
import React from 'react'

const Search = ({ setWeatherDetails }) => {
    const [search, setSearch] = useState("");
    //this is to access api key from .env file
    const apiKey = import.meta.env.VITE_API_KEY;

    const handleInput = (e) => {
        setSearch(e.target.value);
    }
    // console.log(apiKey);

    const searchWeather = async () => {
        if (!search.trim()) return;

        const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${search}`;

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': apiKey,
                'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            if (!response.ok) {
                console.error(result?.message || "API request failed");
                setWeatherDetails(null);
                return;
            }
            setWeatherDetails(result);
            console.log(result);
        } catch (error) {
            console.error(error);
            setWeatherDetails(null);
        }
    }

    const handleKeyDown = async (e) => {
        if (e.key === "Enter") {
            searchWeather();
        }
    }

    //console.log('search',search);
    return (
        <>
            <div>
                <div className='search-section'>

                    <svg
                        onClick={searchWeather}
                        style={{ cursor: 'pointer', width: '24px', height: '24px' }}
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg>
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