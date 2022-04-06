import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      {/* <CircleContainer>
        <SquareAnimation size={"50vmin"} border={"45%"} />
        <SquareAnimation size={"10vmin"} border={"45%"} />
        <SquareAnimation size={"20vmin"} border={"49%"} />
        <SquareAnimation size={"30vmin"} border={"49%"} />
        <SquareAnimation size={"46vmin"} border={"46%"} />
        <SquareAnimation size={"45vmin"} border={"46%"} />
        <SquareAnimation size={"48vmin"} border={"46%"} />
      </CircleContainer> */}
      <SocialWrapper>
        <SocialLink
          target="_blank"
          href="https://github.com/Josh4286/gatsby-portfolio-v1/"
        >
          <FaGithub />
        </SocialLink>
        <SocialLink
          target="_blank"
          href="https://www.linkedin.com/in/joshuawongcy/"
        >
          <FaLinkedin />
        </SocialLink>
      </SocialWrapper>
    </Container>
  );
};

export default Footer;

// const CircleContainer = styled.div`
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
// `;

// const SquareAnimation = styled.div`
// position: absolute;
// right: 50%;
//   width: ${(props) => props.size}};
//   height: ${(props) => props.size}}
//   border-radius: ${(props) => props.border}};
//   border: 1px solid rgba(255, 255, 255, 0.5);
//   z-index: 11;
//   animation: squareAnimation 10s infinite;
//   @keyframes squareAnimation {
//     0% {
//       transform: rotate(0deg);
//     }
//     100% {
//       transform: rotate(360deg);
//     }
//   }
// `;

const Container = styled.div`
  padding: 6rem 0 6rem 0;
  background: #000; /* fallback for old browsers */
  color: #fff;
  overflow: clip;
`;

const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;
const SocialLink = styled.a`
  font-size: 2.5rem;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #ffa436;
    transition: 0.3s ease-in;
  }
  margin-left: 80px;
  margin-right: 80px;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;
