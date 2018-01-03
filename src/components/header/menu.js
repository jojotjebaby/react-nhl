import React, { Component } from 'react';


class Menu extends Component {

	render(){
		return(
			<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
			      <a className="navbar-brand" href="#">NHL Stats</a>
		      <div className="collapse navbar-collapse">
		        <ul className="navbar-nav mr-auto">
		          <li className="nav-item active">
		            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
		          </li>
		          <li className="nav-item">
		            <a className="nav-link" href="#">Link</a>
		          </li>
		          <li className="nav-item">
		            <a className="nav-link disabled" href="#">Disabled</a>
		          </li>
		        </ul>
		      </div>
		    </nav>
		);
	}
}

export default Menu;