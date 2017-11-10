import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import { withRouter } from 'react-router'

import TitleSection from '../../components/TitleSection';
import './index.css';

class Topics extends Component {
  renderTopics() {
    const id = window.location.hash.split('/')[2];
    const examples = this.props.data.filter((ele) => ele.id === id)[0];

    return examples.content.map((example) => {
      return (
        <Link key={example.id} to={`/viewer/${example.id}`} className="Topics-topic">
          <img src={example.preview} className="Topics-topicPreview" />
          <p className="Topics-topicName">{example.name}</p>
        </Link>
      );
    });
  }

  render() {
    return (
      <div className="Topics">
        <Link to="/" className="Topics-return">REGRESAR</Link>

        <TitleSection>Cálculo Vectorial</TitleSection>
        <div className="Topics-topics">
          {this.renderTopics()}
        </div>
        
      </div>
    );
  }
}

export default withRouter(Topics);
