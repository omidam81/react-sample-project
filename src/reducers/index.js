import { combineReducers } from 'redux';

import { authentication } from './authentication';
import { registration } from './registration';
import { users } from './users';
import { alert } from './alert-reducer';
import {UserInfo} from './user-info';


const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  UserInfo,
  alert
});

export default rootReducer;