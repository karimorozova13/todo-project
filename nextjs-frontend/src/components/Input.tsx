const Input = ({ children, style = {} }) => (
  <div
    className="text-center w-full sm:w-[calc(50%-12px)] relative"
    style={style}
  >
    {children}
  </div>
);

export default Input;
