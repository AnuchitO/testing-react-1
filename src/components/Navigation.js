import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink data-cy="Mountain" to="/mountain">Mountain</NavLink></li>
        <li><NavLink data-cy="Beaches" to="/beach">Beaches</NavLink></li>
        <li><NavLink data-cy="Birds" to="/bird">Birds</NavLink></li>
        <li><NavLink data-cy="Food" to="/food">Food</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
