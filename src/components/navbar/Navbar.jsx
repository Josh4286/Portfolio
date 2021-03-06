import React from "react";
import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { menuData } from "./MenuData";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  return (
    <Bar>
      <LogoContainer>
        <Logo
          href="hero"
          to="hero"
          key="hero"
          smooth={true}
          duration={500}
          spy={true}
          offset={-60}
        >
          JW
        </Logo>
      </LogoContainer>

      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>
      <NavigationLinksContainer>
        {menuData.map((item, index) => (
          <NavLinks
            href={item.link}
            to={item.link}
            key={index}
            smooth={true}
            duration={500}
            spy={true}
            offset={-60}
          >
            {item.title}
          </NavLinks>
        ))}
      </NavigationLinksContainer>
      <CTAContainer>
        <Button
          to="contact"
          target="_blank"
          href="../resume.pdf"
          smooth={true}
          duration={500}
          spy={true}
          offset={-60}
        >
          View Resume
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
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: left;
  margin-left: calc(1rem + 4vmin);
  margin-right: calc(1rem + 4vmin);
  font-size: calc(1rem + 1vmin);
  color: #fff;
  width: 100%;
`;

const Logo = styled(LinkS)`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
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
  height: 60px;
  &:hover {
    transition: 0.3s ease-in;
    background: rgba(255, 255, 255, 0.2);
  }
  &.active {
    border-bottom: 3px solid #eb9226;
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

const Button = styled.a`
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
