import styled from "styled-components";
import Parallax from "./Parallax";

const Technology = () => {
  return (
    <>
      <Container>
        <Parallax>
          <p>These are just some of the technologies I have used</p>
        </Parallax>
      </Container>
    </>
  );
};

export default Technology;

const Container = styled.div`
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1d1d24;
  color: #fff;
`;
