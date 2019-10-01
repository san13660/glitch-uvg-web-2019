import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function Background({ children }) {
  return (
    <div className="background">{children}</div>
  );
}

Background.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Background;
