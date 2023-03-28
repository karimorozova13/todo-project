import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

import { authApi } from "@/utils/authApi";

import Container from "./Container";
import Input from "./Input";
import SubmitBtn from "./SubmitBtn";
import LinkText from "./LinkText";
import FormTitle from "./FormTitle";
import Icon from "./Icon";

const FormWrap = styled.div`
  padding: 200px 0;
`;

const LoginForm = () => {
  const router = useRouter();
  const [type, setType] = useState("password");

  const toggleType = () =>
    type === "password" ? setType("text") : setType("password");

  return (
    <Container>
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
          onSubmit={async (values) => {
            const res = await authApi.login(values);
            localStorage.setItem("token", res.token);
            router.push("/my-todo-list");
          }}
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
                    />
                    <Icon onClick={toggleType} type={type} />
                  </div>
                </Input>

                <SubmitBtn
                  title={"Log in"}
                  type="submit"
                  onClick={handleSubmit}
                />
              </Form>
            );
          }}
        </Formik>
        <LinkText>
          {"Don't have an account?"}
          <Link href={"/register"}> {"Register"}</Link>
        </LinkText>
      </FormWrap>
    </Container>
  );
};

export default LoginForm;
