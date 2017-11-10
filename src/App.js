import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Topics from './pages/Topics';
import Viewer from './pages/Viewer';

import './App.css';

const req = "https://urielaero.github.io/arjs-examples/data.json";

class App extends Component {

  state = {
    data: null,
  }

  componentDidMount() {
    fetch(req)
    .then((response) => response.json())
    .then((data) => this.setState({ data }));
  }

  render() {
    if (this.state.data === null) return <div />;

    return (
      <div className="App">
        <Switch>
          <Route path="/" render={() => <Home data={this.state.data} />} exact />
          <Route path="/topic/:id" render={() => <Topics data={this.state.data} />} exact />
          <Route path="/viewer/:id" component={Viewer} />
        </Switch>
      </div>
    );
  }
}

export default App;
