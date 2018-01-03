import axios from 'axios';
import { UPDATE_GAME, UPDATE_LIVE_GAMES } from './types';

export function updateGame(id){

	return function( dispatch ) {
		// Submit email/passowrd to server
		const REQUEST_URL = `https://statsapi.web.nhl.com/api/v1/game/${id}/feed/live`;
		axios.get( REQUEST_URL )
			.then(response => {
				// If request is good
				dispatch({
					type: UPDATE_GAME,
					payload: response.data
				});
			})
			.catch( () => {
				//If request is bad ... 
				// - Show an error to the user
				console.log('error');
			});
	}
}

export function updateLiveGames(){

	return function( dispatch ) {
		// Submit email/passowrd to server
		const today = new Date();
		const self = this;
		let startDate = new Date( today.getTime() - ( 24 * 3600000 ) );
		let endDate = new Date( today.getTime() + (2 * ( 24 * 3600000 ) ));

		const REQUEST_URL =  `https://statsapi.web.nhl.com/api/v1/schedule?startDate=${startDate.toISOString().split('T')[0]}&endDate=${endDate.toISOString().split('T')[0]}&expand=schedule.teams,schedule.linescore,schedule.broadcasts,schedule.ticket,schedule.game.content.media.epg&leaderCategories=&site=en_nhl`;
		
		axios.get(REQUEST_URL)
		  .then(function (response) {
		  	//Update the state with the matches.
		  	let games = [];

		  	for( let i = 0; i < response.data.dates.length; i++){
		  		games = games.concat(response.data.dates[i].games);
		  	}
		  	dispatch({
				type: UPDATE_LIVE_GAMES,
				payload: games
			});
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
}