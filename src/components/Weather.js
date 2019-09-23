import React from 'react';

const Weather = (props) => (
    <div>
        <p>Date/Time: {props.time}</p>
        <p>Temperature: {props.temperature}</p>
        <p>Humidity: {props.humidity}</p>
    </div>  
)

export default Weather;