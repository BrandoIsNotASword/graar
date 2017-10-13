import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

import TitleSection from '../../components/TitleSection';
import './index.css';
import topic from './topic.png';

class Topics extends Component {
  render() {
    return (
      <div className="Topics">
        <Link to="/" className="Topics-return">REGRESAR</Link>

        <TitleSection>Cálculo Vectorial</TitleSection>
        <div className="Topics-topics">
          <Link to="/viewer" className="Topics-topic">
            <img src={topic} className="Topics-topicPreview" />
            <p className="Topics-topicName">Vectores</p>
          </Link>
          <Link to="/viewer" className="Topics-topic">
            <img src={topic} className="Topics-topicPreview" />
            <p className="Topics-topicName">Vectores</p>
          </Link>
          <Link to="/viewer" className="Topics-topic">
            <img src={topic} className="Topics-topicPreview" />
            <p className="Topics-topicName">Vectores</p>
          </Link>
          <Link to="/viewer" className="Topics-topic">
            <img src={topic} className="Topics-topicPreview" />
            <p className="Topics-topicName">Vectores</p>
          </Link>
          <Link to="/viewer" className="Topics-topic">
            <img src={topic} className="Topics-topicPreview" />
            <p className="Topics-topicName">Vectores</p>
          </Link>
          <Link to="/viewer" className="Topics-topic">
            <img src={topic} className="Topics-topicPreview" />
            <p className="Topics-topicName">Vectores</p>
          </Link>
          <Link to="/viewer" className="Topics-topic">
            <img src={topic} className="Topics-topicPreview" />
            <p className="Topics-topicName">Vectores</p>
          </Link>
        </div>
        
      </div>
    );
  }
}

export default Topics;
