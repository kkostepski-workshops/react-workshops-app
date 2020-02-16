import React from 'react';
import { Field } from 'formik';

import LabelText from '../LabelText';
import * as Styled from './TextField.styles';

const TextField = ({ label, name, ...rest }) => (
  <label>
    <LabelText>{label}</LabelText>
    <Field name={name} type="text" component={Styled.TextField} {...rest} />
  </label>
);

export default TextField;
