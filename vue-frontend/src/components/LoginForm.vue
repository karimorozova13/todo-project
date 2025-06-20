<template>
  <Section>
    <Container>
      <PopUp v-if="error" error="Email or password is incorrect" />

      <div class="form-wrap">
        <FormTitle title="Welcome back :)" />

        <Form
          @submit="onSubmit"
          :validation-schema="schema"
          validate-on-blur
          validate-on-change
          validate-on-input
        >
          <Input style="margin: 0 auto 30px">
            <Field
              name="email"
              type="text"
              placeholder="Email"
              autocomplete="email"
            />
            <ErrorMessage name="email" class="error-text" />
          </Input>

          <Input style="margin: 0 auto 30px">
            <div style="position: relative">
              <Field
                :type="type"
                name="password"
                placeholder="Password"
                autocomplete="password"
              />
              <Icon :type="type" @click="toggleType" />
              <ErrorMessage name="password" class="error-text" />
            </div>
          </Input>

          <SubmitBtn title="Log in" type="submit" />
        </Form>

        <LinkText>
          Don’t have an account?
          <RouterLink to="/"> Register</RouterLink>
        </LinkText>
      </div>
    </Container>
  </Section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Field, Form, ErrorMessage } from "vee-validate";
import * as Yup from "yup";
import axios from "axios";

import Section from "./Section.vue";
import Container from "./Container.vue";
import Input from "./Input.vue";
import LinkText from "./LinkText.vue";
import FormTitle from "./FormTitle.vue";
import Icon from "./Icon.vue";
import SubmitBtn from "./SubmitBtn.vue";
import PopUp from "./PopUp.vue";

import { authApi } from "../utils/utils/authApi";

// Tell vee-validate the shape of your form
const router = useRouter();

const type = ref<"password" | "text">("password");
const error = ref<string | null>(null);

const toggleType = () => {
  type.value = type.value === "password" ? "text" : "password";
};

const schema = Yup.object({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const onSubmit = async (values) => {
  try {
    const res = await authApi.login(values);

    localStorage.setItem("token", res.token);
    router.push("/my-todo-list");
  } catch (e) {
    if (axios.isAxiosError(e)) {
      error.value = e.response?.data || "Login failed";
    }
  }
};
</script>

<style scoped>
.form-wrap {
  padding: 200px 0;
}
.error-text {
  color: red;
  font-size: 13px;
  margin-top: 4px;
  display: block;
}
</style>
