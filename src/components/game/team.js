import React, { Component } from 'react';
import Logo from '../logo';
import axios from 'axios';

class Team extends Component {

  render(){

    const team = this.props.team;

    console.log(team);

    return (
      <div className="team">
        <Logo team={ team.abbreviation } />
        <h1>{ team.name }</h1>
        <h3>{ this.props.score }</h3>
      </div>
    );
  }
}

export default Team;