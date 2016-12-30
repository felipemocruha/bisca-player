import React, { Component } from 'react';
import './App.css';
import {Card, Button} from 'mdl-react';

class App extends Component {
    render() {
	var styles = {
	    
	};
	
      return (
          <div className="App">
	    <Card style={{width: '100%', height: '50vh'}}>
              <h2>bisca-player</h2>
	      <Button>Stop</Button>
	      <Button>Previous</Button>
	      <Button>Play/Pause</Button>
	      <Button>Next</Button>	      
	    </Card>
          </div>
      );
  }
}

export default App;
