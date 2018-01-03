import React, { Component } from 'react';
import axios from 'axios';
import LiveBarItem from './livebar-item';
import { connect } from 'react-redux';
import * as actions  from '../../actions';

class LiveBar extends Component {

	//Make the Ajax call with timeout
	componentWillMount() {
		
		this.props.updateLiveGames(); 
		
		setInterval(function() { 
			this.props.updateLiveGames(); 
		}.bind(this), 5000);
  	}

	renderLiveMatchesItems() {
		
		const matchItems = this.props.liveMatches.map((liveMatch) => {
			return <LiveBarItem liveMatch={liveMatch} key={liveMatch.gamePk} />
		});

		return matchItems;
	}

	renderLiveMatches(){

		if(this.props.liveMatches !== undefined ){
			return (
				<div className="livebar__wrapper" style={{ width: this.props.liveMatches.length * 200 + 'px' }}>
				    { this.renderLiveMatchesItems() }
				</div>
			);
		}

		return (
			<span>Loading . . .</span>
		);		
	}

	render(){
		return(
			<div className="livebar">
				{ this.renderLiveMatches() }
		    </div>
		);
	}
}

function mapStateToProps(state) {
  return {
    liveMatches: state.games.liveGames
  };
}

export default connect(mapStateToProps, actions)(LiveBar);