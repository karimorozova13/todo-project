import styled from "styled-components";

const UserTitle = styled.h1`
  font-size: 35px;
  margin-bottom: 40px;
  @media only screen and (max-width: 991px) {
    font-size: 24px;
  }
`;
interface IProps {
  title: string;
}
const Title = ({ title }: IProps) => <UserTitle>{title}</UserTitle>;

export default Title;
