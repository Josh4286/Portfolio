import styled from "styled-components";

export const Projects = () => {
  return (
    <Container id="projects">
      <h1>My Projects</h1>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: clip;
`;
