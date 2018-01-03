import { combineReducers } from 'redux';
import gameReducer from './game_reducer';

const rootReducer = combineReducers({
	games: gameReducer
});

export default rootReducer;