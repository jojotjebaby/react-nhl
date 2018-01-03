import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo';

class LiveBarItem extends Component {
	render(){

		

		const matchData = this.props.liveMatch;

		const awayData = matchData.teams.away;
		const homeData = matchData.teams.home;

		console.log(matchData.linescore.currentPeriodTimeRemaining);

		return (
			<Link to={`/game/${matchData.gamePk}`}>
				<div className="card game">
				    <div className="teams">
				    	<div className="team__away">
				    		<Logo team={awayData.team.abbreviation} />
				    		<div className="name">{ awayData.team.abbreviation }</div>
				    		<span className="score">{ awayData.score }</span>
				    	</div>
				    	<div className="team__home">
				    		<Logo team={homeData.team.abbreviation} />
				    		<div className="name">{ homeData.team.abbreviation }</div>
				    		<span className="score">{ homeData.score }</span>
				    	</div>
				    </div>
				    <div>
				    	{matchData.linescore.currentPeriodTimeRemaining}
				    </div>
				</div>
			</Link>
		);
	}
}

export default LiveBarItem;
