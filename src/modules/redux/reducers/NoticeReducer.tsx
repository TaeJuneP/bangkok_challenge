import * as types from "../actions/types";
import { NoticeActionTypes } from "../actions";

export type NoticeInfo = {
  notice: any;
};

const initialState: NoticeInfo = {
  notice: {}
};

const NoticeReducer = (
  state = initialState,
  action: NoticeActionTypes
): NoticeInfo => {
  switch (action.type) {
    case types.GET_NOTICE_SUCCESS:
      return {
        ...state,
        notice: action.payload
      };
    case types.GET_NOTICE_FAILURE:
      return {
        ...state,
        notice: {}
      };
    default:
      return state;
  }
};

export default NoticeReducer;