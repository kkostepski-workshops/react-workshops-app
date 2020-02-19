import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import useAxios from 'axios-hooks';

import Page from '../../layouts/Page';
import Heading from '../../layouts/Heading';
import TextField from '../../components/form/TextField';
import Select from '../../components/form/Select';
import ValidationError from '../../components/form/ValidationError';
import Button from '../../components/Button';
import validator, { email, required } from '../../components/form/validators';

const AddPersonPage = () => {
  const [{}, executeAddPerson] = useAxios(
    { url: '/api/person', method: 'POST' },
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
            <ErrorMessage name="name" component={ValidationError} />

            <TextField
              name="surname"
              label="Surname"
              validate={value => validator(value, [required])}
            />
            <ErrorMessage name="surname" component={ValidationError} />

            <TextField
              name="email"
              label="Email"
              validate={value => validator(value, [required, email])}
            />
            <ErrorMessage name="email" component={ValidationError} />

            <Select
              name="gender"
              label="Gender"
              validate={value => validator(value, [required])}
            >
              <option value="">-- select --</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </Select>
            <ErrorMessage name="gender" component={ValidationError} />

            <br />
            <Button type="submit">Add</Button>
          </Form>
        )}
      </Formik>
    </Page>
  );
};

export default AddPersonPage;
