import React, { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as Game_actions from '../actions/game_actions'; 
import { WAITING, END, START } from '../reducers/game';
import { Map } from 'immutable';
import Board from '../components/Board';

interface State {
  is_started: boolean;
}

interface Props {
  game_actions: typeof Game_actions;
  game: Map<string, any>;
  game_board: Map<string, any>;
}

class GameBoard extends Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      is_started: false,
    };
  }

  onClickGameStartButton = (e: any) => {
    const { game_actions } = this.props;
    console.log("onClickGameStartButton");
    console.log(this.props, this.state, e);
    this.setState({
      is_started: true,
    });

    game_actions.start_game();
  };

  onClickGameEndButton = (e: any) => {
    const { game_actions } = this.props;

    game_actions.end_game();
  };

  onClickGameResetButton = (e: any) => {
    const { game_actions } = this.props;

    game_actions.reset_game();
  };

  render() {
    // const { is_started } = this.state;
    const { game, game_board } = this.props;
    const is_waiting = game.get('game_status') === WAITING;
    const is_started = game.get('game_status') === START;
    const is_end = game.get('game_status') === END;

    console.log("======", game_board.toJS());

    return (
      <div id="GameBoard" className="uk-container">
        <p className="App-intro">
          ボード
        </p>
        {is_waiting && (
          <button
            onClick={this.onClickGameStartButton} >
            ゲームスタート
          </button>
        )}
        {is_started && (
          <div>
            <p>始まった</p>
            <button
              onClick={this.onClickGameEndButton} >
              終了
            </button>
          </div>
        )}
        {is_end && (
          <div>
            <p>終わった</p>
            <button
              onClick={this.onClickGameResetButton} >
              スタートへ戻る
            </button>
          </div>
        )}
        <Board
          game_board={game_board}
        />
        <div className="uk-animation-toggle">
            <div className="uk-card uk-card-default uk-card-body uk-animation-fade">
                <p className="uk-text-center">Fade</p>
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  game: state.game,
  game_board: state.game_board,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    game_actions: bindActionCreators(Game_actions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBoard);
