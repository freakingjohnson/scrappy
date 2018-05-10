// @flow strict

import * as React from 'react';

const Navbar = (): React.Element<'div'> => (
  <div>
    <ul className="nav">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/gallery">Gallery</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </div>
);

export default Navbar;