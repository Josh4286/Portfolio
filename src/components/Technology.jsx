import styled from "styled-components";
import group from "../Group.svg";
import { ReactComponent as SVGAnimation } from "../blob.svg";
import { ReactComponent as SVGAnimation1 } from "../blob1.svg";

const Technology = () => {
  return (
    <>
      <BlobContainer>
        <StyledSVGAnimation />
        <StyledSVGAnimation1 />
      </BlobContainer>
      <Container id="technology">
        <Headline>Full Stack Developer</Headline>
        <ImageContainer>
          <Image src={group}></Image>
        </ImageContainer>
        <MiddleText>
          I studied web development utilising the MERN stack coming from a Java
          background
        </MiddleText>
      </Container>
    </>
  );
};

export default Technology;

const StyledSVGAnimation = styled(SVGAnimation)`
  position: absolute;
  top: -60%;
  left: -10%;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  height: 100vmin;
  width: 100vmin;
  filter: hue-rotate(0deg) blur(5pxpx);
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
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #1d1d24;
  color: #fff;
  overflow-x: hidden;
  text-align: left;
`;

const MiddleText = styled.p`
  max-width: 80vmin;
  z-index: 7;
`;

const Headline = styled.h2`
  text-align: left;
  max-width: 80vmin;
  z-index: 7;
`;

const Image = styled.img`
  padding: 2rem 1rem 2rem 1rem;
  width: 75vmin;
  z-index: 7;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
