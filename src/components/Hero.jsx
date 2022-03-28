import styled from "styled-components";
import character from "../Untitled.svg";
const Hero = () => {
  return (
    <Container>
      <HeroTextContainer>
        <HeroTextH1>Hi, I'm Josh</HeroTextH1>
        <HeroTextH2>I enjoy web design</HeroTextH2>
      </HeroTextContainer>
      <Portrait src={character}></Portrait>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  padding: 3rem 0 0 0;
  background: #1d1d24;
  min-height: 100vh;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-row: 1fr 1fr 1fr 1fr 1fr;
  overflow: hidden;
`;

const HeroTextContainer = styled.div`
  grid-area: 2 / 2 / 4 / 6;
  text-align: left;
  padding: 1rem 1rem 1rem 1rem;
  margin: 0 0 0 0;
  font-size: 24px;
`;

const HeroTextH1 = styled.h1`
  font-size: calc(1em + 6vmin);
  margin: 0 0 0 0;
  padding: 0 0 0 0;
`;

const HeroTextH2 = styled.h2`
  font-size: calc(0.725em + 2vmin);
  padding: 0 0 0 0;
`;

const Portrait = styled.img`
  position: absolute;
  width: calc(100px + 30vw);
  bottom: -48px;
  right: 0px;
`;
