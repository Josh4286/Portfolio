import styled from "styled-components";

export const Projects = () => {
  return (
    <Container id="projects">
      <Title>My Projects</Title>
    </Container>
  );
};

const Title = styled.h1`
  z-index: 5;
  color: black;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: clip;
`;
