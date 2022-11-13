import React, { Component } from "react";

export class TileRed extends Component {
  constructor(props) {
    super(props);
    this.state = {};  
  }

  render() {
    if(this.props.displayResults){
      return <div>{this.props.time}</div>;
  }
    else{
      return (<div>Wait for green</div>);
    }
  }
}

export default TileRed;
