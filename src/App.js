import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Topics from './pages/Topics';
import Viewer from './pages/Viewer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/topics" component={Topics} exact />
          <Route path="/viewer/:id" component={Viewer} />
        </Switch>
      </div>
    );
  }
}

export default App;
