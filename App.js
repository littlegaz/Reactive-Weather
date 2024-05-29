import React, { useState } from 'react';
import cities from './data.js';
import WeatherCard from './components/WeatherCard.js';
import Location from './components/Location.js';


function App() {
    const [location, setLocation] = useState("London")
    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
                {/* <Location 
                    data={cities} 
                    location={location} 
                    setLocation={setLocation} 
                /> */}


                {cities.map((cityData, index) => (
                    <WeatherCard key={index} data={cityData} />
                ))}
                


            </div>
            
        </>
    )
}

export default App;