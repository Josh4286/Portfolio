import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { menuData } from "./MenuData";
import { Link as LinkS } from "react-scroll";

const MobileNav = ({ isOpen, toggle }) => {
  return (
    <MobileNavContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <MobileWrapper>
        <MobileMenu>
          {menuData.map((item, index) => (
            <MobileLinks
              to={item.link}
              key={index}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              onClick={toggle}
              offset={-60}
            >
              {item.title}
            </MobileLinks>
          ))}
        </MobileMenu>
        <MobileBtnWrap>
          <Button
            primary="true"
            round="true"
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            onClick={toggle}
            offset={-60}
          >
            View Resume
          </Button>
        </MobileBtnWrap>
      </MobileWrapper>
    </MobileNavContainer>
  );
};

export default MobileNav;

const MobileNavContainer = styled.aside`
  position: fixed;
  z-index: ${({ isOpen }) => (isOpen ? "9999" : "-9999")};
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const MobileWrapper = styled.div`
  color: #fff;
`;

const MobileLinks = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #f26a2e;
    transition: 0.2s ease-in-out;
  }
`;

const MobileBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const MobileMenu = styled.div`
  display: grid;
  grid-template-column: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
  @media screen and (max-height: 360px) {
    grid-template-rows: repeat(5, 40px);
  }
`;

const Button = styled(LinkS)`
  border-radius: 50px;
  background: #f26a2e;
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #f26a2e;
  }
  @media screen and (max-height: 360px) {
    padding: 8px 32px;
  }
`;
