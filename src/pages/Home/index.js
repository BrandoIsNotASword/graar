import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

import TitleSection from '../../components/TitleSection';
import './index.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <div className="Home-logo" alt="logo" />
        </header>

        <TitleSection>Asignaturas</TitleSection>
        <Link to="/topics" className="Subject">
          <p className="Subject-name">Ejemplos</p>
          <p className="Subject-summary">Escribe una descripción</p>
        </Link>
        <Link to="/topics" className="Subject">
          <p className="Subject-name">Cálculo Vectorial</p>
          <p className="Subject-summary">Vectores, gráficas</p>
        </Link>
        <Link to="/topics" className="Subject">
          <p className="Subject-name">Ecuaciones diferenciales</p>
          <p className="Subject-summary">Vectores, gráficas</p>
        </Link>
      </div>
    );
  }
}

export default Home;
