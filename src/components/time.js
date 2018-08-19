import React, { Component } from 'react';
class Time extends Component {
    render() {
        return (
            <div className="time">
                <div><p className="para">Hour </p>
                <div className="pt"><span className="timer">{this.props.heures}</span>
                <span className="pts">:</span></div></div>
                <div><p className="para">Minute </p>
                <div className="pt"><span className="timer">{this.props.minutes}</span>
                <span className="pts">:</span></div></div>
                <div><p className="para">Second </p>
                <span className="timer">{this.props.secondes}</span></div>
            </div>
        );
      }
}
export default Time;