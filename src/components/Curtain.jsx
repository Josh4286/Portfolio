import styled from "styled-components";
const Curtain = () => {
  return (
    <SwitchContainer id="design">
      <Invert>
        <CurtainText>
          I enjoy working with both dark and light themes
        </CurtainText>
      </Invert>
    </SwitchContainer>
  );
};

export default Curtain;

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
    min-height: calc(100vh - 60px);
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
  min-height: calc(100vh - 60px);
}
`;

const CurtainText = styled.h1`
  padding: 0 4rem 0 4rem;
  color: var(--color1);
`;
