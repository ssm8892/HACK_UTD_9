import React, { Component } from "react";
import TileRed from "./TileRed.jsx";
import TileGreen from "./TileGreen.jsx";

export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: [],
      tileClickedGreen: false,
      score: 0,
      timer: 0,
      displayGreenTile: false,
    };
  }

  handleRedTileClick() {
    this.setState({
      tileClickedRed: true,
    });
  }

  handleGreenTileClick() {
    this.setState({ tileClickedGreen: true });
  }

  tileRedTimer = () => {
    const min = 5000;
    const max = 10000;

    let minRange = Math.ceil(min);
    let maxRange = Math.floor(max);

    let timeOut = Math.floor(Math.random() * (maxRange - minRange)) + minRange;

    setTimeout(() => {
      this.setState({ displayGreenTile: true });
    }, timeOut);
  };

  render() {
    if (this.state.displayGreenTile === true) {
      this.tileRedTimer();

      return (
        <>
          <TileGreen onClick={this.handleRedTileClick}></TileGreen>
        </>
      );
    } else {
      return (
        <>
          <TileRed onClick={this.handleGreenTileClick}></TileRed>
        </>
      );
    }
  }
}

export default Game;
