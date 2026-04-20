import { useState } from 'react';
import React from 'react'

const Search = () => {
    const [search, setSearch] = useState("");

    const handleInput = (e) =>{
        setSearch(e.target.value);
    }
    const handleKeyDown = (e)=>{
        if(e.key != 'Enter') return;
        //for api calls we do this
      const http = require('https');

const options = {
	method: 'GET',
	hostname: 'weatherapi-com.p.rapidapi.com',
	port: null,
	path: '/current.json?q=53.1%2C-0.13',
	headers: {
		'x-rapidapi-key': 'c282a508aamshec1967001d06d7fp1bededjsn3dc8f0ed78a4',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();
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