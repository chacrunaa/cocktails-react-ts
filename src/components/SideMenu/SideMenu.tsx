import React from 'react';
import { NavLink } from 'react-router-dom';
import { CODES } from '../../shared/constants';

export default function SideMenu() {
  return (
    <nav className="menu">
      {CODES.map((code) => (
        <NavLink
          key={code}
          to={`/${code}`}
          className={({ isActive }) => (isActive ? 'active' : '')}
          end
        >
          {code[0].toUpperCase() + code.slice(1)}
        </NavLink>
      ))}
    </nav>
  );
}
