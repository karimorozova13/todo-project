import styled from "styled-components";
import { Watch } from "react-loader-spinner";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
`;
const ModalWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Loader = () => {
  return (
    <Backdrop>
      <ModalWrap>
        <Watch
          height="200"
          width="200"
          radius="48"
          color="teal"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          visible={true}
        />
      </ModalWrap>
    </Backdrop>
  );
};

export default Loader;
