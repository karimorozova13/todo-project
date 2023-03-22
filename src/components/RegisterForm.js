import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

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

const RegisterForm = () => {
  const [type, setType] = useState("password");
  const [typeConfirmation, setTypeConfirmation] = useState("password");

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
            confrimPassword: "",
            email: "",
          }}
          onSubmit={(values) => {
            console.log(values);
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
            confrimPassword: Yup.string()
              .required()
              .label("Confirm password")
              .oneOf([Yup.ref("password"), null], "Password shoud match"),
          })}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => {
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
                      />
                      <Icon onClick={toggleType} type={type} />
                    </div>
                  </Input>
                  <Input>
                    <div>
                      <Field
                        type={typeConfirmation}
                        name="confrimPassword"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confrimPassword}
                        placeholder={"Confirm password"}
                      />
                      <Icon
                        onClick={toggleConfirmationType}
                        type={typeConfirmation}
                      />
                    </div>
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
          <Link href={"/login"}> {"Log in"}</Link>
        </LinkText>
      </Container>
    </Section>
  );
};

export default RegisterForm;
