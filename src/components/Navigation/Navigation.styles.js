import { NavLink as NativeNavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = styled.nav`
  border-right: 1px solid #000;
  width: 200px;
  min-height: 100%;
`;

const NavLink = styled(NativeNavLink)`
  display: flex;
  align-items: center;
  height: 35px;
  text-decoration: none;
  padding: 0 10px;
`;

export { Navigation, NavLink };
