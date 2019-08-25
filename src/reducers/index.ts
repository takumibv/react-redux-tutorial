import { combineReducers } from 'redux';
import { Map } from 'immutable';
import game from './game';
import game_board from './game_board';

export interface State {
    game: Map<string, any>;
    game_board: Map<string, any>;
}

const Reducer = combineReducers<any>({
    game,
    game_board,
});

export default Reducer;