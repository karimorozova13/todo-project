import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { authApi } from "../utils/utils/authApi";

import Container from "./Container";
import Section from "./Section";
import Input from "./Input";
import LinkText from "./LinkText";
import SubmitBtn from "./SubmitBtn";
import FormTitle from "./FormTitle";
import Icon from "./Icon";

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

const RegisterForm = () => {
  const navigate = useNavigate();
  const [type, setType] = useState<"password" | "text">("password");
  const [typeConfirmation, setTypeConfirmation] = useState<"password" | "text">(
    "password"
  );

  const toggleType = () =>
    type === "password" ? setType("text") : setType("password");
  const toggleConfirmationType = () =>
    typeConfirmation === "password"
      ? setTypeConfirmation("text")
      : setTypeConfirmation("password");

  return (
    <Section>
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
          onSubmit={async (values) => {
            console.log(values);
            const data = await authApi.register(values);
            console.log(data);
            navigate("/login");
          }}
          validationSchema={Yup.object().shape({
            firstName: Yup.string().min(3).required().label("First name"),
            userName: Yup.string().min(3).required().label("User name"),
            lastName: Yup.string().min(3).required().label("Last name"),
            email: Yup.string().email().required().label("Email"),
            password: Yup.string()
              .required()
              .label("Password")
              .matches(
                /^(?=.*[A-Z])/,
                "Password must contain at least one uppercase letter"
              )
              .matches(
                /^(?=.*[a-z])/,
                "Password must contain at least one lowercase letter"
              )
              .matches(
                /^(?=.*[0-9])/,
                "Password must contain at least one number"
              )
              .matches(
                /^(?=.*[!@#$%^&*])/,
                "Password must contain at least one special character"
              )
              .matches(
                /^(?=.{8,})/,
                "Password must contain at least 8 characters"
              ),
            confirmPassword: Yup.string()
              .required()
              .label("Confirm password")
              .oneOf([Yup.ref("password")], "Password shoud match"),
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
                    />
                    {errors.email && <ErrorText>{errors.email}</ErrorText>}
                  </Input>
                  <Input>
                    <Field
                      type={type}
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      placeholder={"Password"}
                    />
                    <Icon onClick={toggleType} type={type} />
                    {errors.password && (
                      <ErrorText>{errors.password}</ErrorText>
                    )}
                  </Input>
                  <Input>
                    <Field
                      type={typeConfirmation}
                      name="confirmPassword"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                      placeholder={"Confirm password"}
                    />
                    <Icon
                      onClick={toggleConfirmationType}
                      type={typeConfirmation}
                    />
                    {errors.confirmPassword && (
                      <ErrorText>{errors.confirmPassword}</ErrorText>
                    )}
                  </Input>
                </FormWrap>

                <SubmitBtn
                  title={"Register"}
                  type="submit"
                  onClick={handleSubmit}
                />
              </Form>
            );
          }}
        </Formik>
        <LinkText>
          {"Already have an account?"}
          <Link to={"/login"}> {"Log in"}</Link>
        </LinkText>
      </Container>
    </Section>
  );
};

export default RegisterForm;
