import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

import TitleSection from '../../components/TitleSection';
import logo from './logo.png';
import './index.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
        </header>

        <TitleSection>Asignaturas</TitleSection>
        <Link to="/topics" className="Topic">
          <p className="Topic-name">Cálculo Vectorial</p>
          <p className="Topic-summary">Vectores, gráficas</p>
        </Link>
        <Link to="/topics" className="Topic">
          <p className="Topic-name">Ecuaciones diferenciales</p>
          <p className="Topic-summary">Vectores, gráficas</p>
        </Link>
      </div>
    );
  }
}

export default Home;
