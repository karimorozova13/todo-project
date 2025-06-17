interface IProps {
  title: string;
}
const FormTitle = ({ title }: IProps) => (
  <h1 className="text-[35px] text-center text-teal-500 mx-auto mb-[60px] w-fit">
    {title}
  </h1>
);

export default FormTitle;
