import React from "react";
import sunny from "../assets/Sunny.svg";
import cloudy from "../assets/Cloudy.svg";
import partlyCloudy from "../assets/PartlyCloudy.svg";
import rainy from "../assets/Rainy.svg";


function WeatherCard(props) {
  const {forecast} = props.data; 

  const iconMap = {
    sunny: sunny,
    cloudy: cloudy,
    "partly cloudy": partlyCloudy,
    rainy: rainy,
  };

  // Function to get the correct icon based on the forecast
  const getIcon = (forecast) => {
    return iconMap[forecast.toLowerCase()] || sunny; // Default to sunny if forecast not found
  };


  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src = {getIcon(forecast)} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{props.data.city}</h3>
            <h5 className="card-text">{props.data.temperature}</h5>
            <h5 className="card-text">{props.data.forecast}</h5>
        </div>
    </div>
  );
};

module.exports = WeatherCard;