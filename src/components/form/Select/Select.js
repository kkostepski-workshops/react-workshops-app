import React from 'react';
import { Field } from 'formik';

import LabelText from '../LabelText';
import * as Styled from './Select.styles';

const Select = ({ label, name, children, ...rest }) => (
  <label>
    <LabelText>{label}</LabelText>
    <Field name={name} type="text" component={Styled.Select} {...rest}>
      {children}
    </Field>
  </label>
);

export default Select;
