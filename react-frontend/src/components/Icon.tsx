import styled from "styled-components";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const IconContainer = styled.span`
  position: absolute;
  top: 0;
  right: 20px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

interface IconProps {
  onClick: () => void;
  type: "password" | "text";
}

const Icon = ({ onClick, type }: IconProps) => {
  return (
    <IconContainer onClick={onClick}>
      {type === "password" ? <BsEye size={15} /> : <BsEyeSlash size={15} />}
    </IconContainer>
  );
};

export default Icon;
