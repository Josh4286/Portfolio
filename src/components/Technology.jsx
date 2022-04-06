import styled from "styled-components";
import Parallax from "./Parallax";
import Blob from "./Blob.jsx";
import group from "../Group.svg";
const Technology = () => {
  return (
    <>
      <Container>
        <h2>Full Stack Developer</h2>
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
