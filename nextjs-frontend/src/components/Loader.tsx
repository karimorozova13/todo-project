import { Watch } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="fixed inset-0 w-screen h-screen bg-[#333] bg-opacity-50">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Watch
          height="200"
          width="200"
          radius="48"
          color="teal"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          visible={true}
        />
      </div>
    </div>
  );
};

export default Loader;
