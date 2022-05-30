import React, { Component } from "react";

export class Input extends Component {
    constructor(props){
        super(props);
        this.state = {
            claxx: props.claxx,
            typez: props.typez,
            placeholder: props.placeholder
        }
    }
  render() {
    return (
      <div>
        <input 
        type={this.state.typez} 
        className={this.state.claxx} 
        placeholder={this.state.placeholder}
        />
      </div>
    );
  }
}

export default Input;
