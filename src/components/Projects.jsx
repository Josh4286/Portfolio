import styled from "styled-components";
import ecommerceFront from "../ecommerceFront.png";
import ecommerceCart from "../ecommerceCart.png";
export const Projects = () => {
  return (
    <Container id="projects">
      <Title>Ecommerce App</Title>
      <EcommerceApp>
        <Images>
          <EcommerceCart src={ecommerceCart} alt="Ecommerce Cart Page" />
          <EcommerceFront src={ecommerceFront} alt="Ecommerce Product List" />
        </Images>
        <Content>
          <h4>Project Features</h4>
          <UnorderedList>
            <ListItem>
              Backend API using Next Connect and MongoDB to handle user
              authentication, product and order details
            </ListItem>
            <ListItem>PayPal integration to handle online payments</ListItem>
            <ListItem>
              Server Side Rendering and data fetching with NextJS
            </ListItem>
            <ListItem>State management with React Context API</ListItem>
            <ListItem>
              Cart data and theme preference stored in cookies
            </ListItem>
            <ListItem>Dark and Light theme</ListItem>
          </UnorderedList>
          <LinkContainer>
            <ViewLive>View Live</ViewLive>
            <ViewCode
              target="_blank"
              href="https://github.com/Josh4286/next-ecommerce"
            >
              View Code
            </ViewCode>
          </LinkContainer>
        </Content>
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
  min-height: calc(100vh - 60px);
  overflow-x: clip;
`;

const EcommerceApp = styled.div`
  display: flex;
  max-width: 1280px;
  padding: 0 4rem;
  grid-gap: 4rem;
  @media screen and (max-width: 1024px) {
    padding: 0 2rem;
    flex-direction: column;
  }
`;
const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  @media screen and (max-width: 360px) {
    flex-direction: column;
  }
`;

const ViewButton = styled.a`
  font-size: calc(0.5rem + 1vmin);
  color: black;
  padding: 0.75rem 2rem;
  border-radius: 16px;
  text-decoration: none;
  transition: 0.3s ease-out;
  margin-right: 1rem;
  margin-top: 1rem;
  border: 3px solid rgba(255, 169, 63, 1);
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 360px) {
    margin-right: 0;
  }
`;
const ViewLive = styled(ViewButton)`
  background: rgba(255, 169, 63, 1);
  border: 4px solid rgba(255, 169, 63, 1);
`;

const ViewCode = styled(ViewButton)``;

const UnorderedList = styled.ul`
  margin: 0;
`;

const ListItem = styled.li`
  margin-top: 1rem;
  font-size: calc(0.5rem + 1vmin);
`;

const Content = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
  }
`;

const Images = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;
  width: 100%;
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
