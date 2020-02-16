import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';

import Page from '../../layouts/Page';
import Heading from '../../layouts/Heading';
import TextField from '../../components/form/TextField';
import Select from '../../components/form/Select';
import validator, { email, required } from '../../components/form/validators';

const AddPersonPage = () => (
  <Page hasNavigation>
    <Heading>Add new person</Heading>

    <Formik
      initialValues={{}}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {props => (
        <Form>
          <TextField
            name="name"
            label="Name"
            validate={value => validator(value, [required])}
          />
          <ErrorMessage name="name" render={msg => <div>{msg}</div>} />

          <TextField name="surname" label="Surname" />
          <ErrorMessage name="surname" />

          <TextField
            name="email"
            label="Email"
            validate={value => validator(value, [required, email])}
          />
          <ErrorMessage name="email" />

          <Select name="gender" label="Gender">
            <option value="">-- select --</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </Select>
          <ErrorMessage name="gender" />

          <button type="submit">Add</button>
        </Form>
      )}
    </Formik>
  </Page>
);

export default AddPersonPage;
