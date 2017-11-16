import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import { withRouter } from 'react-router'

import TitleSection from '../../components/TitleSection';
import './index.css';

class Topics extends Component {

  renderTopics(topics) {
    return topics.content.map((topic) => {
      return (
        <Link key={topic.id} to={`/viewer/${topic.id}`} className="Topics-topic">
          <img src={topic.preview} className="Topics-topicPreview" />
          <p className="Topics-topicName">{topic.name}</p>
        </Link>
      );
    });
  }

  renderExamples(examples) {
    return examples.topics.map((topics) => {
      return (
        <div key={topics.name} className="Topics-examples">
          <p className="Topics-exampleName">{topics.name}</p>
          <div className="Topics-topics">{this.renderTopics(topics)}</div>
        </div>
      );
    });
  }

  render() {
    const id = window.location.hash.split('/')[2];
    const examples = this.props.data.filter((ele) => ele.id === id)[0];

    return (
      <div className="Topics">
        <Link to="/" className="Topics-return">REGRESAR</Link>

        <TitleSection>{examples.name}</TitleSection>
        {this.renderExamples(examples)}
      </div>
    );
  }
}

export default withRouter(Topics);
