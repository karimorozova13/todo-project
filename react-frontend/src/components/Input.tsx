import styled from "styled-components";

const InputContainer = styled.div`
  text-align: center;
  width: 100%;
  width: calc(100% / 2 - 20px / 2);
  position: relative;
  @media only screen and (max-width: 575px) {
    width: 100%;
  }
  div {
    position: relative;
    width: 290px;
    margin: 0 auto;
    @media only screen and (max-width: 767px) {
      width: 250px;
    }
  }
  input {
    min-height: 40px;
    min-width: 290px;
    padding: 7px;
    border: 1px solid #ccc;
    background-color: #eee;
    outline: none;
    cursor: pointer;
    border-radius: 6px;
    &::placeholder {
      color: #ccc;
      font-size: 14px;
    }
    @media only screen and (max-width: 767px) {
      min-width: 250px;
    }
  }
`;

interface InputProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Input = ({ children, style = {} }: InputProps) => {
  return <InputContainer style={style}>{children}</InputContainer>;
};

export default Input;
