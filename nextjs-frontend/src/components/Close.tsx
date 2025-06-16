import { AiOutlineClose } from "react-icons/ai";

interface IProps {
  onClick(): void;
}
const Close = ({ onClick }: IProps) => {
  return (
    <span
      onClick={onClick}
      className="
        flex justify-center items-center
        absolute -top-2 -right-2
        cursor-pointer rounded-full
        border border-gray-300
        w-5 h-5
        bg-gray-200
      "
    >
      <AiOutlineClose />
    </span>
  );
};

export default Close;
