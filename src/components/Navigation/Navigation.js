import React from "react";

import * as Styled from './Navigation.styles';

const Navigation = () => (
  <Styled.Navigation>
    <Styled.NavLink to="/people">People</Styled.NavLink>
    <Styled.NavLink to="/attractions">Attractions</Styled.NavLink>
    <Styled.NavLink to="/assign-attraction">Assign attraction</Styled.NavLink>
    <Styled.NavLink to="/assign-room">Assign room</Styled.NavLink>
  </Styled.Navigation>
);

export default Navigation;
