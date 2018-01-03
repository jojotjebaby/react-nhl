import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import './index.css';
import App from './App';
import Game from './components/game';

import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Router>
			<div>
	  			<Route path="/" component={App} />
	  			<Route path="/game/:id" component={Game} />
			</div>
	  	</Router>
  	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
