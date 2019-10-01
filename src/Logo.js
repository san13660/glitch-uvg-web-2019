import React from 'react';
import './index.css';

function Logo() {
  return (
    <div clasName="Container">
      <img alt="logo" src="https://duckduckgo.com/assets/logo_homepage.normal.v108.svg" href={window.scrollTo(0, 250)} className="mainLogo" />
      <span className="tag">conocer más</span>

    </div>
  );
}

export default Logo;
