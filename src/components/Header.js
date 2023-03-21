import styled from "styled-components";
import { AiOutlineLogout } from "react-icons/ai";
import { useRouter } from "next/router";

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
  p {
    font-size: 16px;
  }
`;

const Header = () => {
  const router = useRouter();
  return (
    <HeaderWrap>
      <BtnWrap
        onClick={() => {
          router.push("/login");
        }}
      >
        <p>{"Log out"}</p>
        <AiOutlineLogout size={20} />
      </BtnWrap>
    </HeaderWrap>
  );
};

export default Header;
