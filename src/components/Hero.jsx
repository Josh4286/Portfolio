import styled from "styled-components";
import { animate, motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <SwirlyContainer>
        <Swirly1 />
        <Swirly2 />
      </SwirlyContainer>
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
            I enjoy developing on the web
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
  overflow: clip;
`;

const SquareAnimation = styled.div`
  position: absolute;
  left: 0;
  width: ${(props) => props.size}};
  height: ${(props) => props.size}}
  border-radius: ${(props) => props.border}};
  border: 1px solid rgba(255, 255, 255, 0.5);
  z-index: 11;
  animation: animate 10s infinite;
  animation-delay:${(props) => props.delay}};
  @keyframes animate {
    100% {
      transform: rotate(360deg);
    }
  }
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

const SwirlyContainer = styled.div`
  position: relative;
  overflow-x: clip;
  width: 100%;
`;
const Swirly = styled.div`
  position: absolute;
  color: #fff;
  background: #fff;
  left: 50%;
  width: 400vh;
  height: 400vh;
  background: #fff;
  @keyframes animate {
    0% {
      transform: translate(-50%, -60%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -60%) rotate(360deg);
    }
  }
`;
const Swirly1 = styled(Swirly)`
  top: -90vh;
  border-radius: 44%;
  background-image: linear-gradient(
    43deg,
    RGBA(84, 8, 53, 0.8) 0%,
    RGBA(8, 30, 84, 0.8) 100%
  );
  z-index: 1;
  animation: animate 10s linear infinite;
`;

const Swirly2 = styled(Swirly)`
  top: -97vh;
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
`;
