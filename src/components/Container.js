import styled from "styled-components";
//
const ContainerWrap = styled.div`
  padding: 0 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1140px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    flex-wrap: initial !important;
  }

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

const Container = ({ children }) => {
  return <ContainerWrap>{children}</ContainerWrap>;
};

export default Container;
