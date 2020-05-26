import * as types from "../actions/types";
import { NoticeActionTypes } from "../actions";

export type NoticeInfo = {
  notice: any;
};

const initialState: NoticeInfo = {
  notice: { data: [], page: {} },
};

const NoticeReducer = (
  state = initialState,
  action: NoticeActionTypes
): NoticeInfo => {
  switch (action.type) {
    case types.GET_NOTICE_SUCCESS:
      return {
        ...state,
        notice: {
          data: state.notice.data.concat(action.payload),
          page: action.page,
        },
      };
    case types.GET_NOTICE_FAILURE:
      return {
        ...state,
        notice: { data: [], page: {} },
      };
    default:
      return state;
  }
};

export default NoticeReducer;
