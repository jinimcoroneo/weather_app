import React from 'react';
import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'
import { throwStatement } from '@babel/types';

const API_KEY = "a1f67c78a69309a76670e182397f506c";

class App extends React.Component {
  state = {
    temperature: "",
    humidity: "",
    pressure: "",
    time: ""
  }
  getLondonWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${API_KEY}&units=metric`)
    const data = await api_call.json()
    this.setState({
      time: new Date().toLocaleString(),
      temperature: data.main.temp,
      humidity: data.main.humidity,
    })
  };

  render() {
    return (
      <div>
        <Title />
        <Form getLondonWeather={this.getLondonWeather}/>
        <Weather 
          time={this.state.time}
          temperature={this.state.temperature}
          humidity={this.state.humidity}
        />
      </div>
    );
  }
}

export default App;