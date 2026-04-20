import { useState } from 'react';
import './App.css'
import Footer from './component/Footer'
import Header from './component/Header'
import Search from './component/Search'
import WeatherCard from './component/WeatherCard'

function App() {
  const [weatherDetails, setWeatherDetails] = useState(null);

  return (
    <>
      <Header/>
      <Search setWeatherDetails={setWeatherDetails}/>
      {weatherDetails && <WeatherCard weatherDetails={weatherDetails}/>}
      
      <Footer/>
    </>
  )
}

export default App
