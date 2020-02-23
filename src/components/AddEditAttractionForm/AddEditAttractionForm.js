import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';

import TextField from '../form/TextField';
import ValidationError from '../form/ValidationError';
import Button from '../Button';
import validator, { required } from '../form/validators';

const AddEditAttractionForm = ({
  initialValues = {},
  executeAddOrEditAttraction,
  onComplete
}) => (
  <Formik
    initialValues={initialValues}
    onSubmit={async values => {
      await executeAddOrEditAttraction({
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

        <br />
        <Button type="submit">
          {Object.values(initialValues).length ? 'Edit' : 'Add'}
        </Button>
      </Form>
    )}
  </Formik>
);

export default AddEditAttractionForm;
