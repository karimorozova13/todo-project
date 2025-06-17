const Container = ({ children }) => (
  <div
    className="px-[15px] mx-auto flex flex-col
  max-w-[1140px]
  sm:max-w-[540px]
  md:max-w-[720px]
  lg:max-w-[960px]
  xl:max-w-[1140px]
  max-[767px]:flex-nowrap"
  >
    {children}
  </div>
);

export default Container;
