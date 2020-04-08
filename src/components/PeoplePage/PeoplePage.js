import React from 'react';
import styled from 'styled-components';

import Page from '../../layouts/Page/Page';
import db from '../../api/db.json';

const availableColumns = [
  { name: 'name', title: 'Imię' },
  { name: 'surname', title: 'Nazwisko' },
  { name: 'email', title: 'Email' },
  { name: 'gender', title: 'Płec' }
];

const PeoplePage = () => (
  <Page hasNavigation>
    <h1>People page</h1>

    <StyledTable>
      <thead>
        <tr>
          {availableColumns.map(column => (
            <th key={column.name}>{column.title}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {db.people.data.map(element => (
          <tr key={element._id}>
            {availableColumns.map(column => (
              <td key={column.name}>{element[column.name]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  </Page>
);

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;

  th,
  td {
    border: 1px solid #000;
  }
`;

export default PeoplePage;
