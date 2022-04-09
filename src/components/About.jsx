import styled from "styled-components";
import group from "../Group.svg";
import { ReactComponent as SVGAnimation } from "../blob.svg";
import { ReactComponent as SVGAnimation1 } from "../blob1.svg";

const About = () => {
  return (
    <>
      <BlobContainer>
        <StyledSVGAnimation />
        <StyledSVGAnimation1 />
      </BlobContainer>
      <Container id="about">
        <Content>
          <LeftColumn>
            <Headline>About Me</Headline>
            <MiddleText>
              Hi, my name is Josh and I enjoy creating things on the web. I like
              experimenting with different designs and finding new ways to
              improve my dev skills.
            </MiddleText>
            <MiddleText>
              I've studied programming fundamentals in Java such as Object
              Oriented Programming and the Model View Controller architecture.
            </MiddleText>
            <MiddleText>
              From the design side, I've studied user interaction design and
              tried my hand at simple illustrations and wireframes using Figma.
            </MiddleText>
            <MiddleText>
              I'm currently using the MERN stack but also looking to learn other
              languages and frameworks.
            </MiddleText>
          </LeftColumn>
          <ImageContainer>
            <Image src={group} alt="Joshua's Tech Stack"></Image>
          </ImageContainer>
        </Content>
      </Container>
    </>
  );
};

export default About;

const StyledSVGAnimation = styled(SVGAnimation)`
  position: absolute;
  top: -60%;
  left: -10%;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  height: 100vmin;
  width: 100vmin;
  filter: hue-rotate(0deg) blur(5px);
  mix-blend-mode: color-dodge;
  animation: glide1 infinite 60s linear;
  @keyframes glide1 {
    0% {
      transform: translate(-20%, 0%) rotate(0deg);
    }
    25% {
      transform: translate(0%, 10%) rotate(-20deg);
    }
    50% {
      transform: translate(10%, 20%) rotate(0deg);
    }
    75% {
      transform: translate(0%, -10%) rotate(20deg);
    }
    100% {
      transform: translate(-20%, 0%) rotate(0deg);
    }
  }
`;

const StyledSVGAnimation1 = styled(SVGAnimation1)`
  mix-blend-mode: color-dodge;
  position: absolute;
  top: -50%;
  left: 10%;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  height: 100vmin;
  width: 100vmin;
  filter: hue-rotate(0deg) blur(5px);

  animation: glide2 infinite 60s linear;
  @keyframes glide2 {
    0% {
      transform: translate(0%, 0%) rotate(0deg);
    }
    25% {
      transform: translate(5%, 2%) rotate(90deg);
    }
    50% {
      transform: translate(10%, -5%) rotate(180deg);
    }
    75% {
      transform: translate(5%, 2%) rotate(270deg);
    }
    100% {
      transform: translate(0%, 0%) rotate(360deg);
    }
  }
`;

const BlobContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow-x: clip;
`;

const Container = styled.div`
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1d1d24;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  padding: 0 4rem;
  color: #fff;
  overflow-x: hidden;
  text-align: left;
  gap: 4rem;
  max-width: 1280px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 2rem;
  }
`;

const LeftColumn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: left;
  padding-right: 2rem;
`;

const MiddleText = styled.p`
  text-align: left;
  z-index: 7;
  font-size: calc(0.725rem + 1vmin);
  padding: 0;
  margin-top: 0.5rem;
`;

const Headline = styled.h2`
  text-align: left;
  max-width: 80vmin;
  z-index: 7;
  font-size: calc(1rem + 2vmin);
  margin-bottom: 2.5rem;
  color: rgba(255, 169, 63, 1);
`;

const Image = styled.img`
  z-index: 7;
  width: 120%;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
