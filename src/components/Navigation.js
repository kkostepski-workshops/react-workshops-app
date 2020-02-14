import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => (
  <StyledNavigation>
    <StyledNavLink to="/people">People</StyledNavLink>
    <StyledNavLink to="/attractions">Attractions</StyledNavLink>
    <StyledNavLink to="/assign-attraction">Assign attraction</StyledNavLink>
    <StyledNavLink to="/assign-room">Assign room</StyledNavLink>
  </StyledNavigation>
);

const StyledNavigation = styled.nav`
  border-right: 1px solid #000;
  width: 200px;
  min-height: 100%;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 35px;
  text-decoration: none;
  padding: 0 10px;
`;

export default Navigation;
