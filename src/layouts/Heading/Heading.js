import React from 'react';
import * as Styled from './Heading.styles';

const Heading = ({ children, renderActions }) => {
  const actions = renderActions ? renderActions() : null;

  return (
    <Styled.Heading>
      {children}

      <Styled.Actions>
        {actions &&
          React.Children.map(actions.props.children, action => (
            <Styled.Action>{action}</Styled.Action>
          ))}
      </Styled.Actions>
    </Styled.Heading>
  );
};

export default Heading;
