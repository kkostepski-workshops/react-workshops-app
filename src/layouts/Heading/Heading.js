import React from 'react';
import * as Styled from './Heading.styles';

const Heading = ({ children, renderActions }) => (
  <Styled.Heading>
    {children}

    <Styled.Actions>{renderActions && renderActions()}</Styled.Actions>
  </Styled.Heading>
);

export default Heading;
