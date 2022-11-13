import React, { Component } from 'react'

export class Tile extends Component {
constructor(props) {
    super(props)
    this.state = {
        tile: this.props.tile,
        tileClicked: this.props.tileClicked,
    }
}

  render() {
    return (
      <div>Tile</div>
    )
  }
}

export default Tile;