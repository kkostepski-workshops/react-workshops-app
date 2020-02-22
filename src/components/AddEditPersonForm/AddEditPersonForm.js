import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';

import TextField from '../form/TextField';
import Select from '../form/Select';
import ValidationError from '../form/ValidationError';
import Button from '../Button';
import validator, { email, required } from '../form/validators';

const AddEditPersonForm = ({
  initialValues = {},
  executeAddOrEditPerson,
  onComplete
}) => (
  <Formik
    initialValues={initialValues}
    onSubmit={async values => {
      await executeAddOrEditPerson({
        data: values
      });

      if (onComplete) {
        onComplete();
      }
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
        <Button type="submit">
          {Object.values(initialValues).length ? 'Edit' : 'Add'}
        </Button>
      </Form>
    )}
  </Formik>
);

export default AddEditPersonForm;
