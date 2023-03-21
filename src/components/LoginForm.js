import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

import Container from "./Container";
import Input from "./Input";
import SubmitBtn from "./SubmitBtn";
import LinkText from "./LinkText";
import FormTitle from "./FormTitle";
import Icon from "./Icon";
import { useRouter } from "next/router";

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
            userName: "",
            password: "",
          }}
          validationSchema={Yup.object().shape({
            userName: Yup.string().required().label("User name"),
            password: Yup.string().required().label("Password"),
          })}
          onSubmit={(values) => {
            console.log(values);
          }}
          validateOnChange={true}
        >
          {({ handleChange, handleSubmit, handleBlur, values }) => {
            return (
              <Form>
                <Input style={{ margin: "0 auto 30px" }}>
                  <Field
                    type="text"
                    name="userName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.userName}
                    placeholder={"User name"}
                    autoComplete="userName"
                  />
                </Input>

                <Input style={{ margin: "0 auto 30px" }}>
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
                </Input>

                <SubmitBtn
                  title={"Log in"}
                  type="submit"
                  onClick={() => {
                    router.push("/");
                    handleSubmit();
                  }}
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
