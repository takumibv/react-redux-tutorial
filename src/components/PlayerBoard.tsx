import React, { Component } from 'react';
import { Map } from 'immutable';

interface Props {
  player_board: Map<string, any>;
}

interface State {
    
}

class PlayerBoard extends Component<Props, State> {
    render() {
        const { player_board } = this.props;
        console.log("player_board::", player_board.toJS());
        return (
            <div className="player_borad">
                <div>player_b</div>
                <div>{player_board.get('stone_num')}個</div>
            </div>
        );
    }
}

export default PlayerBoard;
