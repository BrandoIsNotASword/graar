import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

import TitleSection from '../../components/TitleSection';
import './index.css';

class Home extends Component {

  renderTopics() {
    return this.props.data.map((topic) => {
      return (
        <Link key={topic.name} to={`topic/${topic.id}`} className="Subject">
          <p className="Subject-name">{topic.name}</p>
          <p className="Subject-summary">{topic.description}</p>
        </Link>
      );
    });
  }

  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <div className="Home-logo" alt="logo" />
        </header>

        <TitleSection>Asignaturas</TitleSection>
        {this.renderTopics()}
      </div>
    );
  }
}

export default Home;
