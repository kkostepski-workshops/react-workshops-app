import React from 'react';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

import * as Styled from './Spinner.styles';

const Spinner = () => (
  <Styled.Spinner>
    <ClimbingBoxLoader loading />
  </Styled.Spinner>
);

export default Spinner;
