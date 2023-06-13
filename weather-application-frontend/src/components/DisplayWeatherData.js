import React from "react";
import "../styles/DisplayWeatherData.css";

const DisplayWeatherData = ({ data, loading, error }) => {

  const {
    longitude,
    latitude,
    temperature,
    description,
    region,
    country,
    wind_speed,
    pressure,
    humidity,
    img
  } = data;

  return (
    
    <div className="container  expand-lg bg-transparent mt-md-5 rounded border-black" style={{borderStyle: "solid",borderWidth: "thick"}}>
      {loading? 
      <div className="d-flex flex-row" style={{padding: "50px" , justifyContent: "space-evenly"}}><div className="loader"></div></div>:
      <>
      {error?
      <div className="d-flex flex-row" style={{padding: "50px" , justifyContent: "space-evenly"}}><h2 style={{color: "red"}}>{error}</h2></div>
        :
        <>
      <div className="mt-5 d-flex flex-col md:flex-row" style={{justifyContent: "space-evenly"}}>
        <div className="d-flex flex-row justify-between md:flex-none">
        <div className="mr-10">
          <div className="font-bold text-xl sm:text-2xl md:text-3xl">
            {temperature} <sup> o </sup>C
          </div>
          <div className="font-semibold text-xl sm:text-2xl md:text-3xl">
            {region} , {country}
          </div>
          
        </div>

        <div className="ml-4 font-semibold text-xl sm:text-2xl md:text-3xl">
          <div>Longitude - {longitude}</div>
          <div>Latitude - {latitude}</div>
          </div>
          </div>

        <div className="d-flex flex-row" style={{justifyContent: "space-evenly"}}>
          <h4 className="mt-4  font-semibold text-xl sm:text-2xl md:text-3xl" style={{width: "100%"}}>{description}</h4>
        <div className="ml-4">
          <img src={"http://openweathermap.org/img/w/" + img + ".png"} alt="weather img" className="" style={{height: "100px", width:"100px"}} />
        </div>
        </div>
      </div>
      <div className="row mt-5 mb-5 d-flex flex-row" style={{justifyContent: "space-evenly"}}>
        <div className="col-md-3 weather-info">
          <h3 className="wind">Wind Speed </h3>
          <h2>{wind_speed}</h2>
        </div>
        <div className="col-md-3 weather-info ">
          <h3 className="pressure">Pressure</h3>
          <h2>{pressure}</h2>
        </div>
       
        <div className="col-md-3 weather-info ">
          <h3 className="humidity">Humidity</h3>
          <h2>{humidity}</h2>
        </div>
      </div>
      </>
}
      </>
    }
    </div>
  );
};

export default DisplayWeatherData;