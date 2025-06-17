import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

import TInputType from "@/utils/types/Password.type";
import { authApi } from "@/utils/utils/authApi";

import Icon from "./Icon";
import axios from "axios";
import Container from "./Container";
import FormTitle from "./FormTitle";
import Input from "./Input";
import LinkText from "./LinkText";
import PopUp from "./PopUp";
import SubmitBtn from "./SubmitBtn";

const FormWrap = styled.div`
  padding: 200px 0;
`;

interface IUser {
  email: string;
  password: string;
}

const LoginForm = () => {
  const router = useRouter();
  const [type, setType] = useState<TInputType>("password");
  const [error, setError] = useState(null);

  const toggleType = () =>
    type === "password" ? setType("text") : setType("password");

  const login = async (values: IUser) => {
    try {
      const res = await authApi.login(values);
      localStorage.setItem("token", res.token);
      router.push("/my-todo-list");
    } catch (e) {
      if (axios.isAxiosError(e)) {
        setError(e.response?.data);
      }
    }
  };
  return (
    <Container>
      {error && <PopUp error={"Email or password is incorrect"} />}

      <FormWrap>
        <FormTitle title={"Welcome back :)"} />
        <Formik
          initialValues={{
            password: "",
            email: "",
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().required().label("Email"),
            password: Yup.string().required().label("Password"),
          })}
          onSubmit={(values) => login(values)}
          validateOnChange={true}
        >
          {({ handleChange, handleSubmit, handleBlur, values }) => {
            return (
              <Form>
                <Input style={{ margin: "0 auto 30px" }}>
                  <Field
                    type="text"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder={"Email"}
                    autoComplete="email"
                    className="min-h-[40px] min-w-[290px] max-[767px]:min-w-[250px] p-[7px] border border-[#ccc] bg-[#eee] outline-none cursor-pointer rounded-[6px] placeholder:text-[#ccc] placeholder:text-sm w-full"
                  />
                </Input>

                <Input style={{ margin: "0 auto 30px" }}>
                  <div>
                    <Field
                      type={type}
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      placeholder={"Password"}
                      autoComplete="password"
                      className="min-h-[40px] min-w-[290px] max-[767px]:min-w-[250px] p-[7px] border border-[#ccc] bg-[#eee] outline-none cursor-pointer rounded-[6px] placeholder:text-[#ccc] placeholder:text-sm w-full"
                    />
                    <Icon onClick={toggleType} type={type} />
                  </div>
                </Input>

                <SubmitBtn title={"Log in"} onClick={handleSubmit} />
              </Form>
            );
          }}
        </Formik>
        <LinkText>
          {"Don't have an account?"}
          <Link className="text-[#4682b4] no-underline" href={"/"}>
            {" "}
            {"Register"}
          </Link>
        </LinkText>
      </FormWrap>
    </Container>
  );
};

export default LoginForm;
