import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <button onClick={this.props.getLondonWeather}>Check Weather</button>
        );
    }
};

export default Form;