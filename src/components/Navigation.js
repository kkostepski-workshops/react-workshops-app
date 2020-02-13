import React from "react";
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <NavLink to="/people">People</NavLink> |
    <NavLink to="/attractions">Attractions</NavLink> |
    <NavLink to="/assign-attraction">Assign attraction</NavLink> |
    <NavLink to="/assign-room">Assign room</NavLink>
  </nav>
);

export default Navigation;
