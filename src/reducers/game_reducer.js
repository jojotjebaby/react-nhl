import { UPDATE_GAME, UPDATE_LIVE_GAMES } from '../actions/types';

export default function ( state = {}, action ) {
	switch(action.type) {
		case UPDATE_GAME:
			return { ...state, currentGame: action.payload };

		case UPDATE_LIVE_GAMES:
			console.log('updating live games');
			return { ...state, liveGames: action.payload };
	}

	return state;
}