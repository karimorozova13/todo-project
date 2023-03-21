import styled from "styled-components";

const UserTitle = styled.h1`
  font-size: 35px;
  margin: 0;
  margin-bottom: 40px;
  @media only screen and (max-width: 991px) {
    font-size: 24px;
  }
`;
const Title = ({ title }) => {
  return <UserTitle>{title}</UserTitle>;
};

export default Title;
