import styled from "styled-components";
import { AiOutlineLogout } from "react-icons/ai";
import { useRouter } from "next/router";
import { authApi } from "../../../shared/utils/authApi";

const HeaderWrap = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  background-color: #c0d1c2;
`;
const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
  cursor: pointer;
  transition: opacity 250ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  p {
    font-size: 16px;
  }
  &:hover,
  &:focus {
    opacity: 0.6;
  }
`;

const Header = () => {
  const router = useRouter();

  const logout = async () => {
    let token = localStorage.getItem("token");

    await authApi.logout(token);

    router.push("/login");

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
