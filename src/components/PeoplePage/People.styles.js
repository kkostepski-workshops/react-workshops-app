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

export { Table };
