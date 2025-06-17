import styled from "styled-components";

const UserTitle = styled.h1`
  font-size: 35px;
  margin: 0;
  margin-bottom: 40px;
  @media only screen and (max-width: 991px) {
    font-size: 24px;
  }
`;
interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return <UserTitle>{title}</UserTitle>;
};

export default Title;
