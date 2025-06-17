interface IProps {
  title: string;
}
const Title = ({ title }: IProps) => (
  <h1 className="text-[35px] mb-10 max-[991px]:text-[24px]">{title}</h1>
);

export default Title;
