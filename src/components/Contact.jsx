import styled from "styled-components";
import { ReactComponent as waves } from "../waves.svg";
const Contact = () => {
  return (
    <>
      <Container id="contact">
        <Card>
          <Title>Get In Touch</Title>
          <Paragraph></Paragraph>
          <EmailButton href="mailto:joshuawongcy@outlook.com">
            Say Hello
          </EmailButton>
        </Card>
        <WavesContainer>
          <StyledWaves />
        </WavesContainer>
      </Container>
    </>
  );
};

export default Contact;

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: clip;
`;

const Card = styled.div`
  padding: calc(2rem + 2vmin);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;
  margin-bottom: 20vh;
`;

const Title = styled.h1`
  margin-bottom: 0px;
`;

const Paragraph = styled.p`
  max-width: 80vmin;
  font-size: calc(0.725rem + 0.75vmin);
  color: #1d1d24;
`;

const EmailButton = styled.a`
  font-size: calc(0.725rem + 0.75vmin);
  color: white;
  mix-blend-mode: difference;
  padding: 0.75rem 2rem;
  background: rgba(255, 169, 63, 1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  text-decoration: none;
  outline: none;
  transition: 0.3s ease-out;

  &:hover {
    cursor: pointer;
  }
`;

const WavesContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
`;

const StyledWaves = styled(waves)`
  position: absolute;
  height: 100vmax;
  width: 100vmax;
  left: 0;
  bottom: 0;
  transform: rotate(180deg);
`;
