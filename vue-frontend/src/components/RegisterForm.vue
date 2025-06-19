<template>
  <Section>
    <Container>
      <FormTitle title="Create your own TODO list :)" />
      <Form @submit="onSubmit" class="wrap" :validation-schema="schema" v-slot="{ values  }" validate-on-blur
  validate-on-change
  validate-on-input>
        <Input>
          <Field name="firstName" v-slot="{ field, errorMessage, meta }">
            <input v-bind="field" placeholder="First Name" />
            <p v-if="meta.touched && errorMessage" class="error">{{ errorMessage }}</p>
          </Field>
       </Input>

        <Input>
          <Field name="lastName" v-slot="{ field, errorMessage, meta }">
            <input v-bind="field" placeholder="Last Name" />
            <p v-if="meta.touched && errorMessage" class="error">{{ errorMessage }}</p>
          </Field>
        </Input>

        <Input>
          <Field name="userName" v-slot="{ field, errorMessage, meta }">
            <input v-bind="field" placeholder="User Name" />
            <p v-if="meta.touched && errorMessage" class="error">{{ errorMessage }}</p>
          </Field>
        </Input>

        <Input>
          <Field name="email" v-slot="{ field, errorMessage, meta }">
            <input v-bind="field" type="email" placeholder="Email" />
            <p v-if="meta.touched && errorMessage" class="error">{{ errorMessage }}</p>
          </Field>
        </Input>

        <Input>
          <Field name="password" v-slot="{ field, errorMessage, meta }">
            <input v-bind="field" :type="type" placeholder="Password" />
            <Icon :type="type" @click="toggleType" />
            <p v-if="meta.touched && errorMessage" class="error">{{ errorMessage }}</p>
          </Field>
        </Input>

        <Input>
          <Field name="confirmPassword" v-slot="{ field, errorMessage, meta }">
            <input v-bind="field" :type="typeConfirmation" placeholder="Confirm Password" />
            <Icon :type="typeConfirmation" @click="toggleConfirmationType" />
            <p v-if="meta.touched && errorMessage" class="error">{{ errorMessage }}</p>
          </Field>
        </Input>

        <SubmitBtn title="Register" type="submit" />
      </Form>

      <LinkText>
        Already have an account?
        <RouterLink to="/login">Log in</RouterLink>
      </LinkText>
    </Container>
  </Section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { Form, Field, useForm } from 'vee-validate';
import * as Yup from 'yup';
import { authApi } from '../utils/utils/authApi';

import Container from './Container.vue';
import Section from './Section.vue';
import Input from './Input.vue';
import LinkText from './LinkText.vue';
import SubmitBtn from './SubmitBtn.vue';
import FormTitle from './FormTitle.vue';
import Icon from './Icon.vue';

const router = useRouter();

const type = ref<'text' | 'password'>('password');
const typeConfirmation = ref<'text' | 'password'>('password');

const toggleType = () => {
  type.value = type.value === 'password' ? 'text' : 'password';
};

const toggleConfirmationType = () => {
  typeConfirmation.value = typeConfirmation.value === 'password' ? 'text' : 'password';
};

const schema = Yup.object({
  firstName: Yup.string().required().min(3, 'Minimum 3 characters'),
  lastName: Yup.string().required().min(3, 'Minimum 3 characters'),
  userName: Yup.string().required().min(3, 'Minimum 3 characters'),
  email: Yup.string().required().email('Invalid email format'),
  password: Yup.string()
    .required()
    .min(8, 'Minimum 8 characters')
    .matches(/[A-Z]/, 'At least one uppercase letter')
    .matches(/[a-z]/, 'At least one lowercase letter')
    .matches(/[0-9]/, 'At least one number')
    .matches(/[!@#$%^&*]/, 'At least one special character'),
  confirmPassword: Yup.string()
    .required('Confirm your password')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
});

const onSubmit = async(values) =>{
  try {
    await authApi.register(values);
    router.push('/login');
  } catch (err) {
    console.error(err);
  }
}

</script>

<style scoped lang="scss">
.wrap {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
  justify-content: center;
  margin-bottom: 40px;
}

.error {
  color: red;
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  top: 100%;
  width: 100%;
}
</style>
