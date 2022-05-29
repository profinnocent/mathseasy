import React, { Component } from "react";
// import '../css/w3css.css'
// import '../css/w3ambertheme.css'


export class Button extends Component {
    constructor(props){
        super(props);
        this.state = {
            typez: props.typez,
            text: props.text
        }
    }
   // alert(this.state.typez);
  render() {
    return (
      <div>
        <button className={this.state.typez}>{this.state.text}</button>
      </div>
    );
  }
}

export default Button;
