import React, { Component } from "react";
// import '../css/w3css.css'
// import '../css/w3ambertheme.css'


export class Button extends Component {
    constructor(props){
        super(props);
        this.state = {
            claxx: props.claxx,
            text: props.text,
            typez: props.typez,
            onSubmit: props.onSubmit
        }
    }

     // alert(this.state.typez);
  render() {
    return (
      <div>
        <button 
        type={this.state.typez} 
        className={this.state.claxx}
        onSubmit={this.state.onSubmit}
        >
          {this.state.text}
        </button>
      </div>
    );
  }
}

export default Button;
