import styled from "styled-components";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import TInputType from "../types/Password.type";

const IconContainer = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
interface IProps {
  type: TInputType;
  onClick(): void;
}
const Icon = ({ onClick, type }: IProps) => {
  return (
    <IconContainer onClick={onClick}>
      {type === "password" ? <BsEye size={15} /> : <BsEyeSlash size={15} />}
    </IconContainer>
  );
};

export default Icon;
