import styled from "styled-components";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const IconContainer = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface IconProps {
  onClick: () => void;
  type: "password" | "text";
}

const Icon: React.FC<IconProps> = ({ onClick, type }) => {
  return (
    <IconContainer onClick={onClick}>
      {type === "password" ? <BsEye size={15} /> : <BsEyeSlash size={15} />}
    </IconContainer>
  );
};

export default Icon;
