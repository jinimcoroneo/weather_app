import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.time}</p>
                <p>{this.props.temperature}</p>
                <p>{this.props.humidity}% Humidity</p>
            </div>
        );
    }
};

export default Weather;