import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

const Wrap = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -8px;
  right: -8px;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid #ccc;
  width: 22px;
  height: 22px;
  background-color: #f1f2f4;
`;

interface IProps {
  onClick(): void;
}

const Close = ({ onClick }: IProps) => {
  return (
    <Wrap onClick={onClick}>
      <AiOutlineClose />
    </Wrap>
  );
};

export default Close;
