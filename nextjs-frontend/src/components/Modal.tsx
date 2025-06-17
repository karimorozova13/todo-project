import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface IProps {
  todo?: string;
  btnTitle?: string;
  closeModal(): void;
  updateTodo(val: string): void;
}
const Modal = ({
  todo = "",
  updateTodo,
  closeModal,
  btnTitle = "Edit",
}: IProps) => {
  const [value, setValue] = useState(todo);

  const saveChanges = (e: KeyboardEvent) => {
    const valueFromInput = (e.target as HTMLInputElement).value;

    if (e.key === "Enter") updateTodo(valueFromInput);
  };

  useEffect(() => {
    document.addEventListener("keyup", saveChanges);
    return () => {
      document.removeEventListener("keyup", saveChanges);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 w-screen h-screen bg-black bg-opacity-60"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md p-8 min-w-[500px] max-w-full
  max-sm:min-w-[290px]"
      >
        <span
          className="flex justify-center items-center absolute top-5 right-5 cursor-pointer"
          onClick={closeModal}
        >
          <AiOutlineClose />
        </span>
        <p className="text-base mb-2.5">{"Next up:"}</p>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="min-h-[40px] min-w-[200px] p-[7px] bg-transparent border border-gray-300 rounded-md outline-none"
        />
        <button
          className="bg-teal-600 text-white border border-teal-600 cursor-pointer outline-none flex justify-center items-center p-[7px] min-w-[200px] min-h-[40px] box-border ml-auto rounded-md mt-10 transition-all duration-250 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:bg-white hover:text-teal-600"
          onClick={() => updateTodo(value)}
        >
          {btnTitle}
        </button>
      </div>
    </div>
  );
};

export default Modal;
