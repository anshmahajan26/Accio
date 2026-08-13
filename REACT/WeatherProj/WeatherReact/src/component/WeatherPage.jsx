import { useState, useEffect } from "react";
import React from "react";
import { useParams, Link } from "react-router-dom";
import WeatherCard from "./WeatherCard";

const WeatherPage = () => {
  const { cityName } = useParams();
  const [weatherDetails, setWeatherDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchWeather = async () => {
      if (!cityName) return;
      setLoading(true);
      setError("");

      const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${encodeURIComponent(cityName)}`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": apiKey,
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        if (!response.ok) {
          setError(result?.message || "City not found.");
          setWeatherDetails(null);
        } else {
          setWeatherDetails(result);
        }
      } catch (err) {
        console.error(err);
        setError("Failed to fetch weather details. Please try again.");
        setWeatherDetails(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [cityName, apiKey]);

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      {loading && <p>Loading weather details for {cityName}...</p>}
      {error && (
        <div style={{ color: "red", margin: "10px" }}>
          <p>{error}</p>
        </div>
      )}
      {!loading && !error && weatherDetails && (
        <WeatherCard weatherDetails={weatherDetails} />
      )}
      <div style={{ marginTop: "20px" }}>
        <Link to="/" style={{ color: "#007BFF", textDecoration: "none", fontWeight: "bold" }}>
          &larr; Back to Search
        </Link>
      </div>
    </div>
  );
};

export default WeatherPage;
