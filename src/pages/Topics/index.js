import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

import TitleSection from '../../components/TitleSection';
import './index.css';
import axis from './axis.png';
import ortho from './ortho.png';
import vertexcolor from './vertexcolor.png';

class Topics extends Component {
  render() {
    return (
      <div className="Topics">
        <Link to="/" className="Topics-return">REGRESAR</Link>

        <TitleSection>Cálculo Vectorial</TitleSection>
        <div className="Topics-topics">
          <Link to="/viewer/axis.js" className="Topics-topic">
            <img src={axis} className="Topics-topicPreview" />
            <p className="Topics-topicName">Axis</p>
          </Link>
          <Link to="/viewer/vertexcolor.js" className="Topics-topic">
            <img src={vertexcolor} className="Topics-topicPreview" />
            <p className="Topics-topicName">Vectores</p>
          </Link>
          <Link to="/viewer/ortho.js" className="Topics-topic Topic-topic__ortho">
            <img src={ortho} className="Topics-topicPreview" />
            <p className="Topics-topicName">Ortogonal</p>
          </Link>
        </div>
        
      </div>
    );
  }
}

export default Topics;
