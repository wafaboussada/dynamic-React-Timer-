import React, { Component } from 'react';
class Button extends Component {
    incrementation=()=>{
        this.props.increment();
    }
    reset=()=>{
        this.props.reset();
    }
    stop=()=>{
        this.props.stop();
    }
    render() {
        return (
            <div className="buttons">
                <button className="button start"onClick={this.incrementation} onDoubleClick={this.stop}> Start </button>
                <button className="button reset" onClick={this.reset}> Reset </button>
            </div>
        );
      }
}
export default Button;