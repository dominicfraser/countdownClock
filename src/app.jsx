import React, { Component } from 'react';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-title">Countdown to December 25, 2018</div>
        <div>
          <div className="clock-days">x Days</div>
          <div className="clock-hours">x Hours</div>
          <div className="clock-min">x Minutes</div>
          <div className="clock-sec">x Seconds</div>
        </div>
        <div>
          <input placeholder="new date" />
          <button>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
