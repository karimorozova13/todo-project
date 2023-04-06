import axios from "axios";

const apiConfig = axios.create({
  baseURL: "http://localhost:3002/",
  headers: {},
});

interface IRegisterValues {
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
  email: string;
}
interface ILoginValues {
  password: string;
  email: string;
}
interface ICurrent {
  createdAt: Date;
  updatedAt: Date;
  token: string;
  _id: string;
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
  email: string;
}
interface IAuthApi {
  register(values: IRegisterValues): Promise<{
    nickName: string;
    fullName: string;
    email: string;
  }>;
  login(values: ILoginValues): Promise<{
    token: string;
  }>;
  current(token: string): Promise<ICurrent>;
  logout(token: string): void;
}

export const authApi: IAuthApi = {
  register: async (values) => {
    const res = await apiConfig.post("api/auth/register", values);
    return res.data;
  },
  login: async (values) => {
    const res = await apiConfig.post("api/auth/login", values);
    return res.data;
  },
  current: async (token) => {
    const res = await apiConfig.get("api/auth/current", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return res.data.data.user;
  },
  logout: async (token) => {
    await apiConfig.get("api/auth/logout", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
};
