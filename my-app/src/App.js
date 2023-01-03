import React, { Component } from 'react';
import WeatherApp from './components/weather/WeatherApp'
import './App.css';
import './Bootstrap.css'
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherApp/>
      </div>
    );
  }
}

export default App;