import React, { Component, PropTypes } from 'react';

class GameBoard extends Component {
  render() {
    return (
      <div id="GameBoard">
        <p className="App-intro">
          ボード
        </p>
        <button>ゲームスタート</button>
      </div>
    );
  }
}

export default GameBoard;
