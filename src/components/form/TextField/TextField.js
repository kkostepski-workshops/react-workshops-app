import React from 'react';
import { Field } from 'formik';

import LabelText from '../LabelText';
import * as Styled from './TextField.styles';

const TextField = ({ label, name, ...rest }) => (
  <label>
    <LabelText>{label}</LabelText>
    <Field name={name} type="text" component={TextFieldFormik} {...rest} />
  </label>
);

const TextFieldFormik = ({ children, field, ...props }) => (
  <Styled.TextField {...field} {...props} value={field.value || ''}>
    {children}
  </Styled.TextField>
);

export default TextField;
