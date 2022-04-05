import styled from "styled-components";
import { animate, motion } from "framer-motion";
const Hero = () => {
  return (
    <>
      <Swirly></Swirly>
      <Container>
        <HeroTextContainer>
          <HeroTextH1
            initial={{ opacity: 0, y: "-10vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm Josh
          </HeroTextH1>
          <HeroTextH2
            initial={{ opacity: 0, y: "-2rem" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            I enjoy web development
          </HeroTextH2>
        </HeroTextContainer>
      </Container>
    </>
  );
};

export default Hero;

//calc(3rem + 2vmin) is the height of the navbar
const Container = styled.div`
  margin-top: calc(3rem + 2vmin);
  background: #1d1d24;
  min-height: calc(100vh - (3rem + 2vmin));
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const HeroTextContainer = styled.div`
  padding: 1rem 1rem 1rem 1rem;
  margin: 0 0 20vh 0;
  font-size: 24px;
  z-index: 7;
`;

const HeroTextH1 = styled(motion.h1)`
  font-size: calc(1em + 6vmin);
  margin: 0 0 0 0;
  padding: 0 0 0 0;
`;

const HeroTextH2 = styled(motion.h2)`
  font-size: calc(0.725em + 2vmin);
  padding: 0 0 0 0;
`;

const Swirly = styled.div`
  color: #fff;
  display: grid;
  height: 0;
  overflow-x: clip;
  &:after,
  &:before {
    position: relative;
    content: "";
    width: 400vh;
    height: 400vh;
    left: 25%;
    background: #fff;
  }

  &:before {
    top: -70vh;
    border-radius: 44%;
    background-image: linear-gradient(
      43deg,
      RGBA(84, 8, 53, 0.8) 0%,
      RGBA(8, 30, 84, 0.8) 100%
    );
    z-index: 1;
    animation: animate 10s linear infinite;
  }
  &:after {
    top: -475vh;
    border-radius: 44%;
    background-color: #e84393;
    background-image: linear-gradient(
      43deg,
      RGBA(220, 36, 36, 0.9) 0%,
      RGBA(74, 86, 157, 0.9) 46%,
      RGBA(243, 144, 79, 0.9) 100%
    );
    z-index: 6;
    animation: animate 20s linear infinite;
  }
  @keyframes animate {
    0% {
      transform: translate(-50%, -60%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -60%) rotate(360deg);
    }
  }
`;
