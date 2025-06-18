import styled from "styled-components";

const SectionWrap = styled.div`
  width: 100vw;
  padding: 100px 0;
  @media only screen and (max-width: 991px) {
    padding: 60px 0;
  }
`;

interface SectionProps {
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return <SectionWrap>{children}</SectionWrap>;
};

export default Section;
