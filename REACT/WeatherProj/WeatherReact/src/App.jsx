import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Search from './component/Search';
import WeatherPage from './component/WeatherPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Search />}
        />
        <Route
          path="/weather/:cityName"
          element={
            <>
              <Search />
              <WeatherPage />
            </>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
