import styled from 'styled-components';

const Heading = styled.h1`
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  margin-bottom: 6px;
`;

const Actions = styled.div`
  display: flex;
  margin-left: 10px;
`;

const Action = styled.div`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export { Heading, Action, Actions };
