/**
 * ゲームの状態を管理する
 */

import { Map } from 'immutable';
import { Action } from 'redux';

export const WAITING = 'WAITING';
export const START = 'START';
export const END = 'END';

// 初期State
const initialState = Map({
    game_status: WAITING,
});

const reducer = (state = initialState, action: Action) => {
    console.log(action.type, state);
    switch (action.type) {
        case 'START_GAME':
            return state.merge({
                game_status: START,
            });
        case 'END_GAME':
            return state.merge({
                game_status: END,
            });
        case 'RESET_GAME':
            return initialState;
        default:
            return state;
    }
}

export default reducer;