import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import useAxios from 'axios-hooks';

import Page from '../../layouts/Page';
import Heading from '../../layouts/Heading';
import TextField from '../../components/form/TextField';
import Select from '../../components/form/Select';
import Button from '../../components/Button';
import validator, { email, required } from '../../components/form/validators';

const AddPersonPage = () => {
  const [{}, executeAddPerson] = useAxios(
    { url: '/api/person', method: 'PUT' },
    {
      manual: true
    }
  );

  return (
    <Page hasNavigation>
      <Heading>Add new person</Heading>

      <Formik
        initialValues={{}}
        onSubmit={values => {
          executeAddPerson({
            data: values
          });
        }}
      >
        {() => (
          <Form>
            <TextField
              name="name"
              label="Name"
              validate={value => validator(value, [required])}
            />
            <ErrorMessage name="name" component="div" />

            <TextField
              name="surname"
              label="Surname"
              validate={value => validator(value, [required])}
            />
            <ErrorMessage name="surname" component="div" />

            <TextField
              name="email"
              label="Email"
              validate={value => validator(value, [required, email])}
            />
            <ErrorMessage name="email" component="div" />

            <Select
              name="gender"
              label="Gender"
              validate={value => validator(value, [required])}
            >
              <option value="">-- select --</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </Select>
            <ErrorMessage name="gender" component="div" />

            <br />
            <Button type="submit">Add</Button>
          </Form>
        )}
      </Formik>
    </Page>
  );
};

export default AddPersonPage;
