import React from 'react';
import PropTypes from 'prop-types';
import './Slide.css';

function Slide({
  imgPath, bgColor, txtColor, shadow, title, description,
}) {
  const image = {
    backgroundImage: `url(${imgPath})`,
    width: '1000px',
    height: '385px',
    zoom: '0.8',
    margin: 'auto auto auto auto',
  };

  const bgColor2 = {
    background: `#${bgColor}`,
  };

  const textColor = {
    color: `#${txtColor}`,
  };

  const textShadow = {
    color: `#${txtColor}`,
    textShadow: '0 1px 4px rgba(0,0,0,0.25)',
  };

  return (
    <div className="slideContainer" style={bgColor2}>
      <h1 style={shadow ? textShadow : textColor}>{title}</h1>
      <h2 style={textColor}>{description}</h2>
      <button type="button">Add DuckDuckGo to Chrome</button>
      <div className="slideImage" style={image} />
    </div>
  );
}

Slide.propTypes = {
  imgPath: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  txtColor: PropTypes.string.isRequired,
  shadow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Slide;
