import React from "react";
import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import { menuData } from "./MenuData";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <Bar>
      <Logo to="/" onClick={toggleHome}>
        JW
      </Logo>
      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>
      <NavigationLinksContainer>
        {menuData.map((item, index) => (
          <NavLinks
            to={item.link}
            key={index}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={0}
          >
            {item.title}
          </NavLinks>
        ))}
      </NavigationLinksContainer>
      <CTAContainer>
        <Button
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={0}
        >
          Contact Me
        </Button>
      </CTAContainer>
    </Bar>
  );
};

export default Navbar;

const Bar = styled.div`
  position: fixed;
  top: 0;
  background: #000;
  backdrop-filter: blur(5px);
  width: 100%;
  color: #fff;
  height: calc(3rem + 2vmin);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
`;

const Logo = styled(LinkS)`
  display: flex;
  align-items: left;
  margin-left: calc(1rem + 4vmin);
  margin-right: calc(1rem + 4vmin);
  font-size: calc(1rem + 1vmin);
  cursor: pointer;
  width: 100%;
`;

const NavigationLinksContainer = styled.div`
  margin-right: calc(1rem + 4vmin);
  padding: 0;
  display: flex;
  justify-content: center;
  font-size: calc(0.5rem + 1vmin);
  width: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  font-size: calc(0.5rem + 0.6vmin);
  cursor: pointer;
  height: calc(3rem + 2vmin);
  &:hover {
    transition: 0.3s ease-in;
  }
  &.active {
    border-bottom: 3px solid #f26a2e;
  }
`;

const CTAContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  width: 100%;
  height: 100%;
  margin-right: calc(1rem + 4vmin);
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Button = styled(LinkS)`
  font-size: calc(0.5rem + 0.6vmin);
  background-color: #c94a24;
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 10px;
  text-decoration: none;
  outline: none;
  transition: 0.3s ease-out;

  &:hover {
    cursor: pointer;
    background-color: #ffa436;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileIcon = styled.div`
  display: none;
  color: #fff;
  margin-right: calc(1rem + 4vmin);
  @media screen and (max-width: 768px) {
    display: flex;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
