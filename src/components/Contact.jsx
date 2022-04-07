import styled from "styled-components";
import { ReactComponent as waves } from "../waves.svg";
const Contact = () => {
  return (
    <>
      <Container id="contact">
        <Card>Feel free to contact me</Card>
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

  overflow: clip;
`;

const Card = styled.div`
  padding: 4rem;
  background: white;
  border-radius: 10px;
  min-height: 400px;
  background-color: #d387ab;
  color: white;
  background-image: linear-gradient(315deg, #d387ab 0%, #b279a7 74%);
  z-index: 5;
`;

const WavesContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`;

const StyledWaves = styled(waves)`
  position: absolute;
  height: 100vmax;
  width: 100vw;
  left: 0;
  right: 0;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;

  transform: rotate(180deg);
`;
