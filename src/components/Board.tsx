import React, { Component } from 'react';
import { Map } from 'immutable';
import PlayerBoard from './PlayerBoard';
// import VisibleTodoList from '../containers/VisibleTodoList'
// import TodoList from '../components/TodoList'
// import GameBoard from './GameBoard'

interface Props {
  game_board: Map<string, any>;
}

interface State {
    
}

class Board extends Component<Props, State> {
  render() {
    const { game_board } = this.props;
    const board = game_board.get('board');
    return (
      <div className="borad">
        <h2>GameBoard</h2>
        {board.filter((b: Map<string, any>) => b.get('is_store_hole')).map((store_board: Map<string, any>, index: number) => {
          console.log("game_board");
          return <div>
            <h2>{`player-${index}`}</h2>
            {board.filter((b: Map<string, any>) => b.get('user') === index).map((player_board: Map<string, any>) => 
              <div>
                <PlayerBoard
                  player_board={player_board}
                />
              </div>  
            )}
          </div>
        })}
      </div>
    );
  }
}

export default Board;
