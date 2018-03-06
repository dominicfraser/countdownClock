import React, { Component } from 'react';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2018',
      newDeadline: '',
    };
  }

  changeDeadline() {
    this.setState({ deadline: this.state.newDeadline });
  }

  render() {
    return (
      <div className="app">
        <div className="app-title">{this.state.deadline}</div>
        <div>
          <div className="clock-days">x Days</div>
          <div className="clock-hours">x Hours</div>
          <div className="clock-min">x Minutes</div>
          <div className="clock-sec">x Seconds</div>
        </div>
        <div>
          <input
            placeholder="new date"
            onChange={e =>
              this.setState({
                newDeadline: e.target.value,
              })
            }
          />
          <button onClick={() => this.changeDeadline()}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
