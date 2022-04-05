import styled from "styled-components";
import blob from "../blob.svg";
import logo from "../logo.svg";
import Parallax from "./Parallax";
const Blob = () => {
  return (
    <BlobImage>
      <Parallax value={"-0.1"}>
        <BlobBackground src={blob}></BlobBackground>
      </Parallax>
      <Parallax>
        <TechLogo src={logo}></TechLogo>
      </Parallax>
    </BlobImage>
  );
};

export default Blob;

const BlobImage = styled.div`
  width: calc(1em + 40vmin);
`;

const BlobBackground = styled.img`
  width: 100%;
  height: 100%;
`;
const TechLogo = styled.img`
  width: 50%;
  height: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;
