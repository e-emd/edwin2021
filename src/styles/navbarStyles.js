import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  background: none;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
  height: 80px;
`;

const LogoNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-space-evenly;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.a`
  width: 45px;
  height: 45px;
`;

const NavOptions = styled.ul`
  padding-left: 25px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 50px;
  list-style-type: none;
`;

const Option = styled.li`
  border-radius: 50%;
  border: solid 1px white;
  :hover {
    color: #fff;
  }
`;

export { Header, LogoNav, LogoContainer, Logo, NavOptions, Option };
