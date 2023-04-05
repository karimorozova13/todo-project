import styled from "styled-components";

const Title = styled.h1`
  font-size: 35px;
  text-align: center;
  color: teal;
  margin: 0 auto;
  width: fit-content;
  margin-bottom: 60px;
`;
interface IProps {
  title: string;
}
const FormTitle = ({ title }: IProps) => <Title>{title}</Title>;

export default FormTitle;
