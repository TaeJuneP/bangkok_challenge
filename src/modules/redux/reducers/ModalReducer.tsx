import * as types from "../actions/types";
import { ModalIsVisibleAction } from "../actions";

export type ModalInfo = {
    status: boolean;
};

const initialState: ModalInfo = {
    status: false
};

const ModalReducer = (
    state = initialState,
    action: ModalIsVisibleAction
): ModalInfo => {
    switch (action.type) {
        case types.MODAL_ISVISIBLE:
            return {
                ...state,
                status: action.payload
            };
        default:
            return state;
    }
};

export default ModalReducer;
