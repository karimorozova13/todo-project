import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import { authApi } from "../utils/authApi";

import Container from "./Container";
import Section from "./Section";
import Input from "./Input";
import LinkText from "./LinkText";
import SubmitBtn from "./SubmitBtn";
import FormTitle from "./FormTitle";
import Icon from "./Icon";
import axios from "axios";
import PopUp from "./PopUp";
import TInputType from "../types/Password.type";

const FormWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
  justify-content: center;
  margin-bottom: 40px;
`;
const ErrorText = styled.p`
  color: red;
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  top: 100%;
  width: 100%;
`;

interface IUser {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm = () => {
  const [type, setType] = useState<TInputType>("password");
  const [typeConfirmation, setTypeConfirmation] =
    useState<TInputType>("password");
  const [error, setError] = useState(null);

  const toggleType = () =>
    type === "password" ? setType("text") : setType("password");

  const toggleConfirmationType = () =>
    typeConfirmation === "password"
      ? setTypeConfirmation("text")
      : setTypeConfirmation("password");

  const registerUser = async (values: IUser) => {
    try {
      const data = await authApi.register(values);
      router.push("/login");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data);
      }
    }
  };

  const router = useRouter();

  return (
    <Section>
      {error && <PopUp error={error.message} />}
      <Container>
        <FormTitle title={"Create your own TODO list :)"} />
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            userName: "",
            password: "",
            confirmPassword: "",
            email: "",
          }}
          onSubmit={(values) => registerUser(values)}
          validationSchema={Yup.object().shape({
            firstName: Yup.string().min(3).required().label("First name"),
            userName: Yup.string().min(3).required().label("User name"),
            lastName: Yup.string().min(3).required().label("Last name"),
            email: Yup.string().email().required().label("Email"),
            password: Yup.string()
              .required()
              .label("Password")
              .matches(
                /^(?=.{6,})/,
                "Password must contain at least 6 characters"
              ),
            confirmPassword: Yup.string()
              .required()
              .label("Confirm password")
              .oneOf([Yup.ref("password"), null], "Password shoud match"),
          })}
        >
          {({ values, handleChange, handleBlur, handleSubmit, errors }) => {
            return (
              <Form>
                <FormWrap>
                  <Input>
                    <Field
                      type="text"
                      name="firstName"
                      onChange={handleChange}
                      value={values.firstName}
                      onBlur={handleBlur}
                      placeholder={"First Name"}
                    />
                    {errors.firstName && (
                      <ErrorText>{errors.firstName}</ErrorText>
                    )}
                  </Input>

                  <Input>
                    <Field
                      type="text"
                      name="lastName"
                      onChange={handleChange}
                      value={values.lastName}
                      onBlur={handleBlur}
                      placeholder={"Last Name"}
                    />
                    {errors.lastName && (
                      <ErrorText>{errors.lastName}</ErrorText>
                    )}
                  </Input>

                  <Input>
                    <Field
                      type="text"
                      name="userName"
                      onChange={handleChange}
                      value={values.userName}
                      onBlur={handleBlur}
                      placeholder={"User Name"}
                    />
                    {errors.userName && (
                      <ErrorText>{errors.userName}</ErrorText>
                    )}
                  </Input>
                  <Input>
                    <Field
                      type="email"
                      name="email"
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder={"Email"}
                      autoComplete={"email"}
                    />
                    {errors.email && <ErrorText>{errors.email}</ErrorText>}
                  </Input>
                  <Input>
                    <div>
                      <Field
                        type={type}
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        placeholder={"Password"}
                        autoComplete={"new-password"}
                      />
                      <Icon onClick={toggleType} type={type} />
                    </div>
                    {errors.password && (
                      <ErrorText>{errors.password}</ErrorText>
                    )}
                  </Input>
                  <Input>
                    <div>
                      <Field
                        type={typeConfirmation}
                        name="confirmPassword"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                        placeholder={"Confirm password"}
                        autoComplete={"new-password"}
                      />
                      <Icon
                        onClick={toggleConfirmationType}
                        type={typeConfirmation}
                      />
                    </div>
                    {errors.confirmPassword && (
                      <ErrorText>{errors.confirmPassword}</ErrorText>
                    )}
                  </Input>
                </FormWrap>

                <SubmitBtn title={"Register"} onClick={handleSubmit} />
              </Form>
            );
          }}
        </Formik>
        <LinkText>
          {"Already have an account?"}
          <Link href={"/login"}> {"Log in"}</Link>
        </LinkText>
      </Container>
    </Section>
  );
};

export default RegisterForm;
