import React from 'react';
import './App.css';
import {Card, CardTitle, CardActions} from 'react-toolbox/lib/card';
import Search from './components/search';
import PlayerButtons from './components/playerButtons';
import YoutubePlayer from 'youtube-player';

const App = () => (
    <div className="App">
	<Card raised className="Card">
	    <CardTitle 
		title="bisca-player"
		subtitle="stream from youtube"
	    />

	    <Search />

	    <div id="player">

	    </div>
	    
	    <CardActions>
		<PlayerButtons/>
	    </CardActions>
	</Card>
    </div>
);

export default App;
