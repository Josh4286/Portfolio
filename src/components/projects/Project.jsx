import React from "react";
import styled from "styled-components";
const Project = ({ project, backImg, frontImg }) => {
  return (
    <Container>
      <Title>{project.title}</Title>
      <ProjectDescription>{project.description}</ProjectDescription>
      <ProjectApp>
        <Images>
          <BackImage src={backImg} alt={project.backImgAlt} />
          <FrontImage src={frontImg} alt={project.frontImgAlt} />
        </Images>
        <Content>
          <h3>Project Features</h3>
          <UnorderedList>
            {project.features.map((feature, listIndex) => (
              <ListItem key={listIndex}>{feature}</ListItem>
            ))}
          </UnorderedList>
          <LinkContainer>
            <ViewLive target="_blank" href={project.live}>
              View Live
            </ViewLive>
            <ViewCode target="_blank" href={project.github}>
              View Code
            </ViewCode>
          </LinkContainer>
        </Content>
      </ProjectApp>
    </Container>
  );
};

export default Project;

const Title = styled.h2`
  margin: 0 0 1rem 0;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: clip;
  padding: 8rem 0;
  width: 100%;

  &:nth-child(even) {
    background: #1d1d24;
    color: white;
  }
`;

const ProjectApp = styled.div`
  display: flex;
  max-width: 1280px;
  padding: 0 4rem;
  grid-gap: 4rem;
  @media screen and (max-width: 1024px) {
    padding: 0 2rem;
    flex-direction: column;
  }
`;

const ProjectDescription = styled.p`
  max-width: 1280px;
  text-align: left;
  padding: 0 4rem;
  font-size: calc(0.5rem + 1vmin);
  margin: 3rem 0;
  @media screen and (max-width: 1024px) {
    padding: 0 2rem;
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
  color: inherit;
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
  &:hover {
    transition: 0.3s ease-in;
  }
`;
const ViewLive = styled(ViewButton)`
  background: rgba(255, 169, 63, 1);
  border: 3px solid rgba(255, 169, 63, 1);
  color: black;
  &:hover {
    border: 3px solid #c94a24;
    background: #c94a24;
    color: white;
  }
`;

const ViewCode = styled(ViewButton)`
  &:hover {
    transition: 0.3s ease-in;
    border: 3px solid #c94a24;
    background: #c94a24;
    color: white;
  }
`;

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
  width: 100%;
`;

const Images = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;
  width: 100%;
`;

const FrontImage = styled.img`
  width: 100%;
  grid-column: 2 / span 2;
  grid-row: 2 / span 2;
`;

const BackImage = styled.img`
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
  width: 100%;
`;
