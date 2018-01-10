import React, { Component } from 'react';
import {Route} from 'react-router-dom';

const url = 'https://api.github.com/gists';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
