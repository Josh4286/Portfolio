import styled from "styled-components";
import { ReactComponent as waves } from "../waves.svg";
const Contact = () => {
  return (
    <>
      <Container id="contact">
        <Card>
          <h1>GET IN TOUCH</h1>
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
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
  z-index: 5;
`;

const WavesContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`;

const StyledWaves = styled(waves)`
  position: absolute;
  height: 200vmax;
  width: 100vmax;

  right: 0;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;

  transform: rotate(180deg);
`;
