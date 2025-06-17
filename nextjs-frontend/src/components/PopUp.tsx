import { useEffect, useState } from "react";
import { MdOutlineErrorOutline } from "react-icons/md";

import Close from "./Close";

interface IProps {
  error: string;
}
const PopUp = ({ error }: IProps) => {
  const [isShow, setIsShow] = useState(true);
  useEffect(() => {
    error ? setIsShow(true) : setIsShow(false);
  }, [error]);

  return (
    <>
      {isShow && (
        <div className="fixed top-[25px] right-[25px] min-h-[60px] min-w-[250px] bg-[#f1f2f4] rounded-md flex justify-center items-center gap-[5px]">
          <MdOutlineErrorOutline size={20} color={"red"} />
          <p className="text-red-500"> {error}</p>
          <Close onClick={() => setIsShow(false)} />
        </div>
      )}
    </>
  );
};

export default PopUp;
