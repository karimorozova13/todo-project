import type React from "react";
import styled from "styled-components";
const LoginText = styled.p`
  color: #ccc;
  font-size: 14px;
  margin: 0 auto;
  width: fit-content;
  a {
    color: #4682b4;
    text-decoration: none;
  }
`;

interface LinkTextProps {
  children: React.ReactNode;
}
const LinkText: React.FC<LinkTextProps> = ({ children }) => {
  return <LoginText>{children}</LoginText>;
};

export default LinkText;
