import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import Iframe from 'react-iframe';

import './index.css';

class Viewer extends Component {

  render() {
    return (
      <div className="Viewer">
        <Link to="/topics" className="Viewer-return">REGRESAR</Link>
        <Iframe url="https://urielaero.github.io/arjs-examples/math.html"
          display="initial"
          position="relative"
          allowFullScreen
        />
      </div>
    );
  }
}

export default Viewer;
