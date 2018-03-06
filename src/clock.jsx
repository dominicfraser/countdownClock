import React, { Component } from 'react';
import './app.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    };
  }

  render() {
    return (
      <div>
        <div className="clock-days">{this.state.days} Days</div>
        <div className="clock-hours">{this.state.hours} Hours</div>
        <div className="clock-min">{this.state.min} Minutes</div>
        <div className="clock-sec">{this.state.sec} Seconds</div>
      </div>
    );
  }
}

export default Clock;
