interface IProps {
  title: string;
  onClick(): void;
}
const SubmitBtn = ({ title, onClick }: IProps) => (
  <button
    className="block mx-auto mb-10 px-4 py-[7px] min-h-[40px] w-[290px] bg-teal-500 text-white border border-teal-500 rounded-md cursor-pointer transition-all duration-[250ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-white hover:text-teal-500"
    onClick={onClick}
  >
    {title}
  </button>
);

export default SubmitBtn;
