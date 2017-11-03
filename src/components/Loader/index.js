import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Loader extends Component {
  render() {
    return (
      <div className="Loader">
        <div className="Loader-image" />
      </div>
    );
  }
}

Loader.propTypes = {
  children: PropTypes.any,
};

export default Loader;
