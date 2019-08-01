import { Map } from 'immutable';
import { Action } from 'redux';

export const WAITING = 'WAITING';
export const START = 'START';
export const END = 'END';

// 初期State
const initialState = Map({
    tasks: [
        {
            id: 0,
            text: "actiontext",
            completed: false
        },
        {
            id: 1,
            text: "actiontext22",
            completed: false
        }
    ],
    game_status: WAITING,
});

// Reducer処理
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