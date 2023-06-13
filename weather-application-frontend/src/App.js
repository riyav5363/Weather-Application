import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import DisplayWeatherData from "./components/DisplayWeatherData";

function App() {
  const [weatherData, setWeatherData] = useState({
    data: {},
    error: null,
    loading: true
  });

  useEffect(() => {
    getLocationData();
  }, []);

  const getLocationData = async () => {
    try {
      if (navigator.geolocation) {
        const position = await getCurrentPosition();
        const city_name = await getCityName(
          position.coords.latitude,
          position.coords.longitude
        );
        fetchWeatherData(city_name);
      } else {
        setWeatherData({ data: {}, error: "", loading: true });
      }
    } catch (error) {
      setWeatherData({ data: {}, error: "Cannot retrieve the City information!", loading: false });
    }
  };

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const getCityName = async (latitude, longitude) => {
    try {
      const res = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
      );
      return res.data.address.city;
    } catch (error) {
      setWeatherData({ data: {}, error: "Error: Cannot retrieve the city name", loading: false });
    }
  };

  const fetchWeatherData = async (city) => {
    try {
      const res = await axios.get(`http://localhost:8080/weather/${city}`);
      const weather_data = res.data;

      setWeatherData({
        data: {
          longitude: weather_data.coord.lon,
          latitude: weather_data.coord.lat,
          temperature: weather_data.main.temp,
          description: weather_data.weather[0].description,
          region: city,
          country: weather_data.sys.country,
          wind_speed: weather_data.wind.speed,
          pressure: weather_data.main.pressure,
          humidity: weather_data.main.humidity,
          img: weather_data.weather[0].icon,
        },
        error: null,
        loading: false
      });
    } catch (error) {
      setWeatherData({ data: {}, error: "Cannot retrieve the weather information", loading: false });
    }
  };

  return (
    <div className="container">
      <Header getWeatherData={fetchWeatherData} />
      <DisplayWeatherData {...weatherData} />
    </div>
  );
}

export default App;
