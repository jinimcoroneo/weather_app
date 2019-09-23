import React from 'react';
import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = "a1f67c78a69309a76670e182397f506c";

class App extends React.Component {
  state = {
    temperature: "",
    humidity: "",
    pressure: "",
    time: ""
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`)
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
        <div className="wrapper">
          <div className="container">
            <div className="row">
              <div className=".col-xs-5 title-container">
                <Title />
              </div>
              <div className=".col-xs-7 form-container">
                <Form getWeather={this.getWeather} />
                <Weather
                  time={this.state.time}
                  temperature={this.state.temperature}
                  humidity={this.state.humidity}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;