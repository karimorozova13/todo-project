import styled from "styled-components";

const Btn = styled.button`
  padding: 7px;
  min-height: 40px;
  width: 290px;
  display: block;
  margin: 0 auto;
  margin-bottom: 40px;
  background-color: teal;
  color: #fff;
  border: 1px solid teal;
  border-radius: 6px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.23, 1, 0.32, 1);

  &:hover,
  &:focus {
    background-color: #fff;
    color: teal;
  }
`;

const SubmitBtn = ({ title, onClick }) => <Btn onClick={onClick}>{title}</Btn>;

export default SubmitBtn;
