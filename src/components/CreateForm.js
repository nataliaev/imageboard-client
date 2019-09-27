import React from "react";

import { Form, Input, InputButton } from "./styles/Form";

export default function CreateForm({ onSubmit, onChange, values }) {
  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        name="title"
        placeholder="title"
        value={values ? values.title : null}
        onChange={onChange}
      />
      <Input
        type="text"
        name="url"
        placeholder="url"
        value={values ? values.url : null}
        onChange={onChange}
      />
      <InputButton type="submit" value="Submit" />
    </Form>
  );
}
