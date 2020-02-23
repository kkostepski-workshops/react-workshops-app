import React from 'react';
import * as Styled from './Heading.styles';

const Heading = ({ children, renderActions }) => (
  <Styled.Heading>
    {children}

    <Styled.Actions>
      {renderActions &&
        renderActions.map((action, index) => (
          <Styled.Action key={index}>{action}</Styled.Action>
        ))}
    </Styled.Actions>
  </Styled.Heading>
);

export default Heading;
