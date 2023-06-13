import "../styles/Header.css"
import React, { useState } from 'react';

const Header = ({ getWeatherData }) => {
  const [city, setCity] = useState('');

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getWeatherData(city);
  };
  return (

    
    <div className="row d-flex justify-content-between">
      <div className="col-md-6 mt-5">
        <h1 className="title">Weather App</h1>
      </div>
      <div className="w-100 md:max-w-fit">
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-row sm:justify-content-around ml-3">
          <input
            type="text"
            className="form-control  text-field mt-5 mb-5 sm:w-100"
            style={{"width" : "80%"}}
            placeholder="Write a city like (New York)"
            value={city}
            onChange={handleInputChange}
          />
          <button type="submit" className="btn-style">
            Search
          </button>

          
          
          </div>
        </form>
      </div>
    </div>
  );
};

export default Header;
