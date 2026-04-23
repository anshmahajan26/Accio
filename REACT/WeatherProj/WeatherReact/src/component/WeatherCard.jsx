import React from 'react'

const WeatherCard = ({ weatherDetails }) => {
    const location = weatherDetails?.location;
    const current = weatherDetails?.current;

    if (!location || !current) {
        return null;
    }

    return (
        <>
            <div style={{color:red,display:flex,}}>
                <h2>{location.name}, {location.country}</h2>
                <p>{current.condition.text}</p>
                <p>Temp: {current.temp_c} C</p>
                <p>Humidity: {current.humidity}%</p>
            </div>

        </>
    )
}
export default WeatherCard;