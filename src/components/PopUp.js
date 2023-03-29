import { useEffect, useState } from "react";
import styled from "styled-components";
import { MdOutlineErrorOutline } from "react-icons/md";

import Close from "./Close";

const Wrap = styled.div`
  position: fixed;
  top: 25px;
  right: 25px;
  min-height: 60px;
  min-width: 250px;
  background-color: #f1f2f4;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  p {
    color: red;
  }
`;

const PopUp = ({ error }) => {
  const [isShow, setIsShow] = useState(true);
  useEffect(() => {
    error ? setIsShow(true) : setIsShow(false);
  }, [error]);

  return (
    <>
      {isShow && (
        <Wrap>
          <MdOutlineErrorOutline size={20} color={"red"} />
          <p> {error}</p>
          <Close onClick={() => setIsShow(false)} />
        </Wrap>
      )}
    </>
  );
};

export default PopUp;
