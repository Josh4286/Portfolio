import { useState } from "react";
import styled from "styled-components";
import { projectData } from "../projects/ProjectData.js";
import ecommerceFront from "../../assets/ecommerceFront.png";
import ecommerceBack from "../../assets/ecommerceCart.png";
import oldPortfolioBack from "../../assets/oldPortfolioBack.png";
import oldPortfolioFront from "../../assets/oldPortfolioFront.png";
import Project from "./Project";
export const Projects = () => {
  return (
    <Container id="projects">
      {/* {projectData.map((app, index) => {
        // const frontImg = new URL(project.frontImg, import.meta.url);
        // const backImg = new URL(project.backImg, import.meta.url);
        //Vite is not webpack so can't use require. https://vitejs.dev/guide/assets.html#new-url-url-import-meta-url, looks like there is an issue with Vite with this, searched around and the issue is quite recent with no solutions.
        return <Project project={app} />;
      })} */}
      <Project
        project={projectData[0]}
        frontImg={ecommerceFront}
        backImg={ecommerceBack}
      />
      <Project
        project={projectData[1]}
        frontImg={oldPortfolioFront}
        backImg={oldPortfolioBack}
      />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 60px);
  overflow-x: clip;
`;
