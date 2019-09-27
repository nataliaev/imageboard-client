import React from "react";

import { Form, Input, FormTitle, InputButton } from "./styles/Form";

export default function SignUpForm({ onSubmit, onChange, values }) {
  return (
    <Form onSubmit={onSubmit}>
      <FormTitle>Sign Up</FormTitle>
      <Input
        type="text"
        name="email"
        placeholder="email"
        value={values ? values.email : null}
        onChange={onChange}
      />
      <Input
        type="password"
        name="password"
        placeholder="password"
        value={values ? values.password : null}
        onChange={onChange}
      />
      <InputButton type="submit" value="Submit" />
    </Form>
  );
}
