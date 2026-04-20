import { useState } from 'react';
import React from 'react'

const Search = () => {
    const [search, setSearch] = useState("");

    const handleInput = (e) =>{
        setSearch(e.target.value);
    }
   const handleKeyDown = async (e) => {
    if (e.key !== "Enter") return;

    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${search}`;

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'YOUR_KEY',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

    //console.log('search',search);
    return (
        <>
            <div>
                <div className='search-section'>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg>
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