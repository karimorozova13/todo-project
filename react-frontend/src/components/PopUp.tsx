import { useEffect, useState } from "react";
import { MdOutlineErrorOutline } from "react-icons/md";
import styled from "styled-components";

import Close from "./Close";

const ErrorBox = styled.div`
  position: fixed;
  top: 25px;
  right: 25px;
  min-height: 60px;
  min-width: 250px;
  background-color: #f1f2f4;
  border-radius: 0.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 0 10px;
  z-index: 999;
`;
const ErrorText = styled.p`
  color: #ef4444;
  font-size: 14px;
`;

interface IProps {
  error: string;
}

const PopUp = ({ error }: IProps) => {
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    if (error) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  }, [error]);

  return (
    <>
      {isShow && (
        <ErrorBox>
          <MdOutlineErrorOutline size={20} color={"red"} />
          <ErrorText> {error}</ErrorText>
          <Close onClick={() => setIsShow(false)} />
        </ErrorBox>
      )}
    </>
  );
};

export default PopUp;
