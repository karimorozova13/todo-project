import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import Icon from "./Icon";
import PopUp from "./PopUp";
import Container from "./Container";
import FormTitle from "./FormTitle";
import Input from "./Input";
import LinkText from "./LinkText";
import Section from "./Section";
import SubmitBtn from "./SubmitBtn";
import TInputType from "@/utils/types/Password.type";
import { authApi } from "@/utils/utils/authApi";

interface IUser {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm = () => {
  const router = useRouter();

  const [error, setError] = useState(null);
  const [type, setType] = useState<TInputType>("password");
  const [typeConfirmation, setTypeConfirmation] =
    useState<TInputType>("password");

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
                <div className="flex flex-wrap w-full gap-6 max-w-[600px] mx-auto justify-center mb-10">
                  <Input>
                    <Field
                      type="text"
                      name="firstName"
                      onChange={handleChange}
                      value={values.firstName}
                      onBlur={handleBlur}
                      placeholder={"First Name"}
                      className="min-h-[40px] min-w-[290px] max-[767px]:min-w-[250px] p-[7px] border border-[#ccc] bg-[#eee] outline-none cursor-pointer rounded-[6px] placeholder:text-[#ccc] placeholder:text-sm w-full"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 absolute right-1/2 translate-x-1/2 top-full w-full">
                        {errors.firstName}
                      </p>
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
                      className="min-h-[40px] min-w-[290px] max-[767px]:min-w-[250px] p-[7px] border border-[#ccc] bg-[#eee] outline-none cursor-pointer rounded-[6px] placeholder:text-[#ccc] placeholder:text-sm w-full"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 absolute right-1/2 translate-x-1/2 top-full w-full">
                        {errors.lastName}
                      </p>
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
                      className="min-h-[40px] min-w-[290px] max-[767px]:min-w-[250px] p-[7px] border border-[#ccc] bg-[#eee] outline-none cursor-pointer rounded-[6px] placeholder:text-[#ccc] placeholder:text-sm w-full"
                    />
                    {errors.userName && (
                      <p className="text-red-500 absolute right-1/2 translate-x-1/2 top-full w-full">
                        {errors.userName}
                      </p>
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
                      className="min-h-[40px] min-w-[290px] max-[767px]:min-w-[250px] p-[7px] border border-[#ccc] bg-[#eee] outline-none cursor-pointer rounded-[6px] placeholder:text-[#ccc] placeholder:text-sm w-full"
                    />
                    {errors.email && (
                      <p className="text-red-500 absolute right-1/2 translate-x-1/2 top-full w-full">
                        {errors.email}
                      </p>
                    )}
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
                        className="min-h-[40px] min-w-[290px] max-[767px]:min-w-[250px] p-[7px] border border-[#ccc] bg-[#eee] outline-none cursor-pointer rounded-[6px] placeholder:text-[#ccc] placeholder:text-sm w-full"
                      />
                      <Icon onClick={toggleType} type={type} />
                    </div>
                    {errors.password && (
                      <p className="text-red-500 absolute right-1/2 translate-x-1/2 top-full w-full">
                        {errors.password}
                      </p>
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
                        className="min-h-[40px] min-w-[290px] max-[767px]:min-w-[250px] p-[7px] border border-[#ccc] bg-[#eee] outline-none cursor-pointer rounded-[6px] placeholder:text-[#ccc] placeholder:text-sm w-full"
                      />
                      <Icon
                        onClick={toggleConfirmationType}
                        type={typeConfirmation}
                      />
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-red-500 absolute right-1/2 translate-x-1/2 top-full w-full">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </Input>
                </div>

                <SubmitBtn title={"Register"} onClick={handleSubmit} />
              </Form>
            );
          }}
        </Formik>
        <LinkText>
          {"Already have an account?"}
          <Link className="text-[#4682b4] no-underline" href={"/login"}>
            {" "}
            {"Log in"}
          </Link>
        </LinkText>
      </Container>
    </Section>
  );
};

export default RegisterForm;
