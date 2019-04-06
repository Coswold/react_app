import { combineReducers } from 'redux';

import timerReducer from './timers-reducers';
import selectTimerReducer from './select-timer-reducer';

export default combineReducers({
    timers: timerReducer,
    selectedTimer: selectTimerReducer,
});
