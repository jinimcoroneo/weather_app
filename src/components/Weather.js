import React from 'react';

const Weather = (props) => (
    <div className="weather__info">
        <p>date: {props.time.split(",")[0]}</p>
        <p>time: {props.time.split(",")[1]}</p>
        <p>temperature: {props.temperature}</p>
        <p>humidity: {props.humidity}</p>
    </div>  
)

export default Weather;