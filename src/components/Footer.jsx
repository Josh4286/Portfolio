import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <SocialWrapper>
        <SocialLink
          target="_blank"
          href="https://github.com/Josh4286/gatsby-portfolio-v1/"
        >
          <FaGithub />
        </SocialLink>
        <SocialLink
          target="_blank"
          href="https://www.linkedin.com/in/joshuawongcy/"
        >
          <FaLinkedin />
        </SocialLink>
      </SocialWrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  padding: 6rem 0 6rem 0;
  background: #000; /* fallback for old browsers */
  color: #fff;
`;

const SocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;
const SocialLink = styled.a`
  font-size: 2.5rem;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #aa336a;
    transition: 0.3s ease-in;
  }
  margin-left: 80px;
  margin-right: 80px;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;
