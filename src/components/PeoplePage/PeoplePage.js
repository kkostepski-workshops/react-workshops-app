import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Page from '../../layouts/Page/Page';

const availableColumns = [
  { name: 'name', title: 'Imię' },
  { name: 'surname', title: 'Nazwisko' },
  { name: 'email', title: 'Email' },
  { name: 'gender', title: 'Płec' }
];

const PeoplePage = () => {
  const [refetch, setRefetch] = useState(false);
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);

    fetch('http://localhost:4000/people')
      .then(reponse => reponse.json())
      .then(response => {
        setIsFetching(false);
        setData(response.data);
      });
  }, [refetch]);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <Page hasNavigation>
      <h1>People page</h1>

      <button onClick={() => setRefetch(!refetch)}>refetch data</button>

      <StyledTable>
        <thead>
          <tr>
            {availableColumns.map(column => (
              <th key={column.name}>{column.title}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map(element => (
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
};

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
