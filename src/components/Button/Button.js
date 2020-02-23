import styled from 'styled-components';

const Button = styled.button`
  border-radius: 3px;
  background-color: #c0c0c0;
  padding: 5px;
  min-width: 100px;

  &:not(:disabled) {
    cursor: pointer;
    border: 1px solid #000;
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;

export default Button;
