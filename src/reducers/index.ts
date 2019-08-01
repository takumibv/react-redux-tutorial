import { combineReducers } from 'redux';
import { Map } from 'immutable';
import game from './game';

export interface State {
    game: Map<string, any>;
}

const Reducer = combineReducers<State>({
    game
});

export default Reducer;