import React, { Component } from 'react';
import { connect } from 'react-redux';
import Team from './game/team';
import axios from 'axios';
import * as actions  from '../actions';

class Game extends Component {

  renderGameSection(id){
    if( this.props.currentGame !== undefined ){

      const { away, home } = this.props.currentGame.gameData.teams;
      const awayLineScore = this.props.currentGame.liveData.linescore.teams.away;
      const homeLineScore = this.props.currentGame.liveData.linescore.teams.home;
      return (
        <header>
        
          <Team team={away} score={awayLineScore.goals} />
          <span>VS</span>
          <Team team={home} score={homeLineScore.goals}/>

        </header>
      );
    }
    else{
      return <h1>Loading . . .</h1>;
    }
  }

  componentWillMount() {
    this.props.updateGame(this.props.match.params.id);
  }

  componentDidUpdate() {
    const gameID = parseInt(this.props.match.params.id);

    if(this.props.currentGame === undefined || gameID !== this.props.currentGame.gamePk){
      this.props.updateGame(gameID);
    }
  }

  render(){
    console.log(this.props.currentGame);
    const gameID = this.props.match.params.id;
    return (
      <section className="game">
        { this.renderGameSection(gameID) }
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentGame: state.games.currentGame
  };
}

export default connect( mapStateToProps, actions )(Game);