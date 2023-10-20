import React, { Component } from 'react';
import Calendar from './Calendar';
import './Calendar.css';
import Toolbar from './Toolbar';

const data = [
  { start_date:'2022-11-15 6:00', end_date:'2022-11-15 8:00', text:'Event 1', id: 1 },
  { start_date:'2022-11-18 10:00', end_date:'2022-11-18 18:00', text:'Event 2', id: 1 }
];

class App2 extends Component {

  state = {
    currentTimeFormatState: true, 
  };

  handleTimeFormatStateChange = (state) => {
    this.setState({
        currentTimeFormatState: state
    });
  }
  render() {
    const { currentTimeFormatState, messages } = this.state;
    return (
      <div>
        <div className='tool-bar'>
          <Toolbar
            timeFormatState={currentTimeFormatState}
            onTimeFormatStateChange={this.handleTimeFormatStateChange}
          />
        </div>
        <div className='scheduler.container'>
          <Calendar 
            events={data}
            timeFormatState={currentTimeFormatState} />
        </div>
      </div>
    );
  }
}
export default App2;