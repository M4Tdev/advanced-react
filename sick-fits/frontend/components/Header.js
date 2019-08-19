import React from 'react';

import Nav from './Nav';

const Header = () => (
  <div className="bar">
    <div>
      <a href="">Sick Fits</a>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </div>
);

export default Header;
