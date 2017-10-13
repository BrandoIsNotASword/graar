import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class TitleSection extends Component {
  render() {
    return <p className="TitleSection">{this.props.children}</p>;
  }
}

TitleSection.propTypes = {
  children: PropTypes.text,
};

TitleSection.defaultProps = {
  children: '',
};

export default TitleSection;
