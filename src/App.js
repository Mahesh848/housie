import React from 'react';
import './App.scss';
import Home from './components/home/home';
import CreateGame from './components/create-game/createGame';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  	return (
		<div className="housie">
			<Router>
				<Route path="/" exact component={Home} />
				<Route path="/create-game" exact component={CreateGame} />
			</Router>
		</div>
  	);
}

export default App;
