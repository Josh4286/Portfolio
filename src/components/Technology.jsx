import styled from "styled-components";
import Parallax from "./Parallax";
import Blob from "./Blob.jsx";
import group from "../Group.svg";
const Technology = () => {
  return (
    <>
      <Container>
        <TextContainer>
          <h2>Full Stack Developer</h2>
          <ImageContainer>
            <Image src={group}></Image>
          </ImageContainer>
          <Parallax value="">
            <MiddleText>
              I studied web development utilising the MERN stack coming from a
              Java background
            </MiddleText>
          </Parallax>
        </TextContainer>
      </Container>
    </>
  );
};

export default Technology;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: left;
  background: #1d1d24;
  color: #fff;
  position: relative;
  z-index: 5;
`;

const TextContainer = styled.div`
  color: #fff;
  z-index: 2;
  position: absolute;
`;

const MiddleText = styled.p`
  padding: 1rem;
  max-width: 80vmin;
`;

const Image = styled.img`
  padding: 4rem 1rem 4rem 1rem;
  width: 80vmin;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
