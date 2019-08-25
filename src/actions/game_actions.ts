import { Dispatch } from "redux";
import { start_game_board } from "./game_board_actions";

export const start_game = () => {
    return (dispatch: Dispatch<any>) => {
        dispatch(start_game_board());
        dispatch(_start_game());
    };
};

const _start_game = () => {
    return {
        type: 'START_GAME',
    }
}

export const end_game = () => {
    return {
        type: 'END_GAME',
    };
};

export const reset_game = () => {
    return {
        type: 'RESET_GAME',
    };
};