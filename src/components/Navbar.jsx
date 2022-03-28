import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Bar>
      <Logo>Joshua Wong</Logo>
      <NavigationLinks>
        <Button>Contact Me</Button>
      </NavigationLinks>
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
  height: calc(2rem + 2vmin);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  margin-left: calc(1rem + 4vmin);
  font-size: calc(0.625rem + 1vmin);
`;

const NavigationLinks = styled.div`
  margin-right: calc(1rem + 4vmin);
  padding: 0;
  display: flex;
  justify-content: flex-end;
  font-size: calc(0.275rem + 1vmin);
`;

const Button = styled.button`
  font-size: 1em;
  &:hover {
    cursor: pointer;
  }
`;
