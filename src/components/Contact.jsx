import styled from "styled-components";

const Contact = () => {
  return (
    <Container id="contact">
      <Card>Feel free to contact me</Card>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(240, 240, 240);
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
`;
