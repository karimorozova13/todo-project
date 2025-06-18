import styled from "styled-components";
import { Watch } from "react-loader-spinner";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background-color: #333;
  opacity: 0.5;
  z-index: 1000;
`;

const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Loader = () => {
  return (
    <>
      <Overlay />
      <LoaderWrapper>
        <Watch
          height="200"
          width="200"
          radius="48"
          color="teal"
          ariaLabel="watch-loading"
          visible={true}
        />
      </LoaderWrapper>
    </>
  );
};

export default Loader;
