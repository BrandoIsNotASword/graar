import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/index.js';
import Topics from './pages/Topics/index.js';
import Viewer from './pages/Viewer/index.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/topics" component={Topics} exact />
          <Route path="/viewer" component={Viewer} exact />
        </Switch>
      </div>
    );
  }
}

export default App;
