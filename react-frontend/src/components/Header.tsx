import styled from "styled-components";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { authApi } from "../utils/utils/authApi";

const HeaderWrap = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  background-color: #c0d1c2;
  cursor: pointer;
  transition: opacity 250ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  &:hover,
  Add commentMore actions &:focus {
    opacity: 0.6;
  }
`;
const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
  p {
    font-size: 16px;
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const logout = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      authApi.logout(token);
    } else {
      console.warn("No token found, skipping logout.");
    }

    navigate("/login");

    localStorage.removeItem("token");
  };

  return (
    <HeaderWrap>
      <BtnWrap onClick={logout}>
        <p>{"Log out"}</p>
        <AiOutlineLogout size={20} />
      </BtnWrap>
    </HeaderWrap>
  );
};

export default Header;
