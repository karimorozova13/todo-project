// Imports
import { Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";
const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const SharedLayout = () => {
  return (
    <>
      <nav>
        <StyledLink to="/" end>
          Register
        </StyledLink>
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/my-todo-list">My Todo List</StyledLink>
      </nav>
      <Outlet />
    </>
  );
};
