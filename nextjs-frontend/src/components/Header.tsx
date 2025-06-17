import { AiOutlineLogout } from "react-icons/ai";
import { useRouter } from "next/router";

import { authApi } from "@/utils/utils/authApi";

const Header = () => {
  const router = useRouter();

  const logout = async () => {
    let token = localStorage.getItem("token");

    await authApi.logout(token);

    router.push("/login");

    localStorage.removeItem("token");
  };

  return (
    <div className="p-[15px] flex justify-between bg-[#c0d1c2]">
      <div
        className="flex items-center gap-[10px] ml-auto cursor-pointer transition-opacity duration-[250ms] ease-[cubic-bezier(0.445,0.05,0.55,0.95)] hover:opacity-60 focus:opacity-60"
        onClick={logout}
      >
        <p className="text-[16px]">{"Log out"}</p>
        <AiOutlineLogout size={20} />
      </div>
    </div>
  );
};

export default Header;
