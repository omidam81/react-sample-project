import { userConstants } from '../constants';

export function UserInfo(state = {}, action) {
  switch (action.type) {
    case userConstants.USER_LOADED:
      return { data_loaded: true , UserInfo: action.UserInfo};
    default:
      return state
  }
}