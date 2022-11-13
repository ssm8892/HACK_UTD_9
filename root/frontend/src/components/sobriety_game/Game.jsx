import React, { Component } from "react";
import TileRed from "./TileRed.jsx";
import TileGreen from "./TileGreen.jsx";
import "./Game.css";

export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      displayGreenTile: false,
      timerStarted: 0,
      displayRedTile: true,
      endTime: 0,
      timeout: false,
    };
    this.handleGreenTileClick = this.handleGreenTileClick.bind(this);
  }

  handleGreenTileClick() {
    console.log(this.state.displayGreenTile);
    this.setState({ endTime: new Date().getTime(), tileClickedGreen: true, displayGreenTile: false, displayResults: true });
    
  }

  tileRedTimer = () => {
    const min = 5000;
    const max = 10000;

    let minRange = Math.ceil(min);
    let maxRange = Math.floor(max);

    let timeOut = Math.floor(Math.random() * (maxRange - minRange)) + minRange;

    setTimeout(() => {
      this.setState({ displayGreenTile: true , displayRedTile: false, timeout: true});
    }, timeOut);
  };

  render() {
    if (this.state.displayGreenTile !== false) {
        this.setState({timerStarted : new Date().getTime()});
      return (
        <div className="GreenPanel" onClick={this.handleGreenTileClick}>
            <TileGreen ></TileGreen>
        </div>
      );
    } else {
        if(this.state.timeout === false){
            this.tileRedTimer();
        }
        this.setState({timer: this.state.endTime - this.state.timerStarted});
      return (
        <div className='RedPanel'>
            <TileRed displayResults={this.state.displayResults} time={this.state.timer}></TileRed>
        </div>
      );
    }
  }
}

export default Game;
