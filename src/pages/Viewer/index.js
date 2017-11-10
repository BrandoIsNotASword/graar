import React, { Component } from 'react';
import Iframe from 'react-iframe';
import { withRouter } from 'react-router'

import Loader from '../../components/Loader';

import './index.css';

class Viewer extends Component {
  render() {
    const url = `https://urielaero.github.io/arjs-examples/get.html?id=${this.props.match.params.id}`;

    return (
      <div className="Viewer">
        <div className="Viewer-return" onClick={() => this.props.history.goBack()}>
          REGRESAR
        </div>
        <Loader />
        <Iframe
          style={{ zIndex: 1 }}
          url={url}
          display="initial"
          position="relative"
          allowFullScreen
        />
      </div>
    );
  }
}

export default withRouter(Viewer);
