import styled from "styled-components";
import ecommerceFront from "../ecommerceFront.png";
import ecommerceCart from "../ecommerceCart.png";
export const Projects = () => {
  return (
    <Container id="projects">
      <Title>Ecommerce App</Title>
      <EcommerceApp>
        <EcommerceCart src={ecommerceCart} />
        <EcommerceFront src={ecommerceFront} />
      </EcommerceApp>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow-x: clip;
`;

const EcommerceApp = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  max-width: 100vw;
`;

const OldPortfolioApp = styled.div`
  margin-top: 50vmax;
  position: relative;
  display: flex;
  justify-content: right;
  width: 100vw;
`;

const EcommerceFront = styled.img`
  width: 100%;
  grid-column: 2 / span 2;
  grid-row: 2 / span 2;
`;

const EcommerceCart = styled.img`
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
  width: 100%;
`;
