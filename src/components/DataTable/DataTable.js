import React from 'react';

import * as Styled from './DataTable.styles';

const DataTable = ({ data, columns, renderActions }) => (
  <Styled.Table>
    <thead>
      <tr>
        {columns.map(({ name, label }) => (
          <th key={name}>{label}</th>
        ))}

        {renderActions.map((_, index) => (
          <th key={index}></th>
        ))}
      </tr>
    </thead>

    <tbody>
      {data.map(row => (
        <tr key={row._id}>
          {columns.map(column => (
            <td key={column.name}>{row[column.name]}</td>
          ))}

          {renderActions.map((renderAction, index) => (
            <td key={index}>{renderAction(row._id)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </Styled.Table>
);

export default DataTable;
