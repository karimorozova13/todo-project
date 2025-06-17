import { BsEye, BsEyeSlash } from "react-icons/bs";

import TInputType from "@/utils/types/Password.type";

interface IProps {
  type: TInputType;
  onClick(): void;
}
const Icon = ({ onClick, type }: IProps) => {
  return (
    <span
      className="absolute cursor-pointer top-0 right-0 h-full w-10 flex items-center justify-center"
      onClick={onClick}
    >
      {type === "password" ? <BsEye size={15} /> : <BsEyeSlash size={15} />}
    </span>
  );
};

export default Icon;
