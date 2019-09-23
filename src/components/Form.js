import React from 'react';

const Form = (props) => (
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="Enter London"/>
        <input type="text" name="country" placeholder="Enter UK"/>
        <button>Check Weather</button>
    </form>
)

export default Form;