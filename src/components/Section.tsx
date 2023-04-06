import styled from "styled-components";

const SectionWrap = styled.div`
  width: 100%;
  padding: 100px 0;
  @media only screen and (max-width: 991px) {
    padding: 60px 0;
  }
`;

const Section = ({ children }) => <SectionWrap>{children}</SectionWrap>;

export default Section;
