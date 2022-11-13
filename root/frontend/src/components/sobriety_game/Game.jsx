import React, { Component } from 'react'

export class Game extends Component {
    constructor(props) {   
        super(props)
        this.state = {
            tiles: [],
            tileClicked: [],
            score: 0,
            timer: 0,
        }
    }

  render() {
    return (
      <div>Game</div>
    )
  }
}

export default Game