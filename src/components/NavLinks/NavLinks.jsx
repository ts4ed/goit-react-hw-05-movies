import { NavLink } from 'react-router-dom';
import s from './NavLinks.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: red;
  }
`;

const NavLinks = () => {
  return (
    <header className={s.container}>
      <ul className={s.list}>
        <li className={s.link}>
          <StyledLink className={s.item} to="/home">
            Home
          </StyledLink>
        </li>
        <li className={s.link}>
          <StyledLink className={s.item} to="/movies">
            Movies
          </StyledLink>
        </li>
      </ul>
    </header>
  );
};
export default NavLinks;
