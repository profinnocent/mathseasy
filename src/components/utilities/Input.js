import React, { Component } from "react";

export class Input extends Component {
    constructor(props){
        super(props);
        this.state = {
            claxx: props.claxx,
            typez: props.typez,
            placeholder: props.placeholder,
            onChange: props.onChange,
            username: props.username
        }
    }
  render() {
    return (
      <div>
        <input 
        type={this.state.typez} 
        className={this.state.claxx} 
        placeholder={this.state.placeholder}
        onChange={this.state.onChange}
        value={this.state.username}
        />
      </div>
    );
  }
}

export default Input;
