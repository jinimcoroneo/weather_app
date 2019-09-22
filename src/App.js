import React from 'react';
import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = "a1f67c78a69309a76670e182397f506c";

class App extends React.Component {
  getLondonWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${API_KEY}&units=metric`)
    const data = await api_call.json()
    console.log(data);
  };

  render() {
    return (
      <div>
        <Title />
        <Form getLondonWeather={this.getLondonWeather}/>
        <Weather />
      </div>
    );
  }
}

export default App;