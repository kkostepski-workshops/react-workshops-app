import React from 'react';
import { Formik, Form } from 'formik';

import Page from '../../layouts/Page';
import Heading from '../../layouts/Heading';
import TextField from '../../components/form/TextField';
import Select from '../../components/form/Select';
import Button from '../../components/Button';

const AddPersonPage = () => (
  <Page hasNavigation>
    <Heading>Add new person</Heading>

    <Formik
      initialValues={{}}
      onSubmit={values => {
        console.log('values', values);
      }}
    >
      {() => (
        <Form>
          <TextField name="name" label="Name" />
          <TextField name="surname" label="Surname" />
          <TextField name="email" label="Email" />
          <Select name="gender" label="Gender">
            <option value="">-- select --</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </Select>
          <br />
          <Button type="submit">Add</Button>
        </Form>
      )}
    </Formik>
  </Page>
);

export default AddPersonPage;
