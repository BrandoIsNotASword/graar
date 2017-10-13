import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

import TitleSection from '../../components/TitleSection';
import './index.css';

class Viewer extends Component {
  render() {
    return (
      <div className="Viewer">
        <Link to="/topics" className="Viewer-return">REGRESAR</Link>
      </div>
    );
  }
}

export default Viewer;
