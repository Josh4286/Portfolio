import styled from "styled-components";

const Curtain = () => {
  return (
    <SwitchContainer id="design">
      {/* <CircleContainer>
        <SquareAnimation size={"20vmin"} border={"45%"} />
        <SquareAnimation size={"35vmin"} border={"44%"} />
        <SquareAnimation size={"25vmin"} border={"49%"} />
        <SquareAnimation size={"30vmin"} border={"49%"} />
        <SquareAnimation size={"40vmin"} border={"48%"} />
        <SquareAnimation size={"45vmin"} border={"47%"} />
        <SquareAnimation size={"50vmin"} border={"46%"} />
        <SquareAnimation size={"52vmin"} border={"45%"} />
        <SquareAnimation size={"55vmin"} border={"44%"} />
        <SquareAnimation size={"60vmin"} border={"48%"} />
        <SquareAnimation size={"65vmin"} border={"46%"} />
      </CircleContainer> */}
      <Invert>
        <CurtainText>
          I enjoy working with both dark and light themes
        </CurtainText>
      </Invert>
    </SwitchContainer>
  );
};

export default Curtain;

const CircleContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow-x: clip;
`;

const SquareAnimation = styled.div`
position: absolute;
top: 50vh;
right: -20%;
  width: ${(props) => props.size}};
  height: ${(props) => props.size}}
  border-radius: ${(props) => props.border}};
  border: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 11;
  animation: squareAnimation 10s infinite;
  @keyframes squareAnimation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const SwitchContainer = styled.div`
  text-align: left;
  background-image: linear-gradient(
    to bottom,
    var(--color2) 50%,
    var(--color1) 50%
  );
  &:after {
    content: "";
    display: block;
    min-height: var(--minh);
  }
`;

const Invert = styled.div`
/** make the content sticky **/
  position: sticky;
  top: 20px;
  overflow-x: clip;
  /** blend the content with the contrast effect **/
  mix-blend-mode: difference;

  /** center the content **/
  display: flex;
  align-items: center;
  justify-content: center;
  
  /** set the minimum height of the section **/
  min-height: var(--minh);
}
`;

const CurtainText = styled.h1`
  padding: 0 4rem 0 4rem;
  color: var(--color1);
`;