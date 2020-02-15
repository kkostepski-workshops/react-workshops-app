import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;

  th {
    background-color: #c0c0c0;
  }

  td,
  th {
    padding: 10px;
    border: 1px dotted #c0c0c0;
  }
`;

const ButtonAddNew = styled.button`
  box-shadow: none;
  padding: 6px 10px;
  font-weight: 500;
  border: 1px solid #000;
  background-color: #c0c0c0;
  
  a {
    text-decoration: none;
    color: ${props => props.theme.fontColor};
  }
`;

export { Table, ButtonAddNew };
