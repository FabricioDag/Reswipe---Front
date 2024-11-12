import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faUser } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  position:fixed;
  bottom:0;
  left:0;
  width:100%;
  padding:1rem;
  background-color:red;
  display:flex;
  align-items:center;
  justify-content:space-around;
`;

const StyledNavLink = styled(NavLink)`
  color:green;
  transition: .2s ease;
  height:50px;
  width:50px;
  border-radius:50%;
  display:grid;
  place-content:center;

  &.active {
    color: blue;
    font-weight: bold;
    border:2px solid white;
    transform:translateY(-70%);
    background-color:red;
  }
`;

const Navigation = () => {
  return (
    <StyledNav>
      <StyledNavLink
        to="/feed"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        <FontAwesomeIcon icon={faBook} />
      </StyledNavLink>
      <StyledNavLink
        to="/Swiper"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        <FontAwesomeIcon icon={faHome} />
      </StyledNavLink>
      <StyledNavLink
        to="/profile"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        <FontAwesomeIcon icon={faUser} />
      </StyledNavLink>

      {/* ---- Teste integração front/back ---- */}
      <StyledNavLink
        to="/login"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        <FontAwesomeIcon icon={faUser} />
      </StyledNavLink>
    </StyledNav>
  );
};

export { Navigation };
