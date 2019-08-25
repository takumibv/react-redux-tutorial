/**
 * ゲームのボードの状態を管理する
 */

import { Map, List } from 'immutable';
import { Action } from 'redux';

export const PLAYER_NUM = 2; // プレイヤーの数
export const BOARD_LENGTH = 6; // １プレイヤーの持つ穴の数
export const INITIAL_STONE_NUM = 3; // 初期状態の(１穴の)石の数
const HOLE_SIZE = PLAYER_NUM * (BOARD_LENGTH + 1); // 全ての穴の数

// class Hole {
//     id: number = 0;
//     next_id: number = 0;
//     stone_num: number = 0;
//     constructor(id:number, next_id:number, stone_num:number) {
//         this.id = id;
//         this.next_id = next_id;
//         this.stone_num = stone_num;
//     }
// };
// class PlayerHole extends Hole {
// }
// class Store extends Hole {
// };

const hole = Map({
    id: 0,
    next_id: 0,
    stone_num: 0,
});

const player_hole = Map({
    user: 0,
    is_player_hole: true,
}).merge(hole);
const store_hole = Map({
    is_store_hole: true,
}).merge(hole);

// 初期State
const initial_state = Map({
    board: List().setSize(HOLE_SIZE).map((_, i) => {
        const merge_hole = {id: i, next_id: (i + 1) % HOLE_SIZE};
        if (i % (BOARD_LENGTH + 1) === 0) {
            return store_hole.merge(merge_hole);
        }
        return player_hole.merge(merge_hole).set('user', Math.floor(i/(BOARD_LENGTH + 1)));
    }),
});

// Reducer処理
const reducer = (state = initial_state, action: Action) => {
    console.log(action.type, state);
    switch (action.type) {
        case 'INIT_GAME_BOARD':
            return initial_state;
        case 'START_GAME_BOARD':
            const board = state.get('board') || List();
            return state.set(
                'board', 
                board.map(hole => hole.get('is_player_hole')
                    ? hole.set('stone_num', INITIAL_STONE_NUM)
                    : hole.set('stone_num', 0)
                ),
            );
        default:
            // console.log("====:::", state.setIn(['board', 0, 'id'], 1).toJS());
            return state;
    }
}

export default reducer;