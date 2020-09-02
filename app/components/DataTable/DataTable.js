import React from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components';

const TableStyles = styled.div`
  table {
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    border-collapse: separate;
    border-spacing: 0 1em;

    th,
    td {
      padding: 11px 10px 9px 10px;
      height: 75px;
      text-align: center;
      width: 2%;
    }
    tbody tr {
      background-color: #f0f0f0;
    }

    tr td:first-of-type {
      border-radius: 10px 0px 0px 10px;
    }

    tr td:last-of-type {
      border-radius: 0px 10px 10px 0px;
    }

    thead th {
      border-bottom-width: 2px;
      font-size: 15px;
      font-weight: 600;
      height: 26px !important;
      line-height: normal;
      letter-spacing: normal;
      padding: 3px 10px !important;
    }

    thead tr:first-of-type {
      height: 26px !important;
    }
  }
`;

const DataTable = () => {
  const data = React.useMemo(
    () => [
      {
        blockNumber: '587',
        channelName: 'akcessglobal',
        numberOfTx: '12',
        dashHash: 'c6ef8c1d',
        blockHash: 'a16ba16b00',
        previousHash: '1d96036f37',
        transactions: '1d96036bde',
        size: '11',
      },
      {
        blockNumber: '587',
        channelName: 'akcessglobal',
        numberOfTx: '12',
        dashHash: 'c6ef8c1d',
        blockHash: 'a16b00a16b',
        previousHash: '1d96036bd67d8',
        transactions: '1d96036bd67d8',
        size: '11',
      },
      {
        blockNumber: '587',
        channelName: 'akcessglobal',
        numberOfTx: '12',
        dashHash: 'c6ef8c1d',
        blockHash: 'a16ba16b00',
        previousHash: '1d96036bd67d8',
        transactions: '1d96036bde',
        size: '11',
      },
    ],
    [],
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Block Number',
        accessor: 'blockNumber', // accessor is the "key" in the data
      },
      {
        Header: 'Channel Name',
        accessor: 'channelName',
      },
      {
        Header: 'Number of Tx',
        accessor: 'numberOfTx',
      },
      {
        Header: 'Dash Hash',
        accessor: 'dashHash',
      },
      {
        Header: 'Block Hash',
        accessor: 'blockHash',
      },
      {
        Header: 'Previous Hash',
        accessor: 'previousHash',
      },
      {
        Header: 'Transactions',
        accessor: 'transactions',
      },
      {
        Header: 'Size (KB)',
        accessor: 'size',
      },
    ],
    [],
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <TableStyles>
      <table {...getTableProps()}>
        <thead>
          {// Loop over the header rows
          headerGroups.map(headerGroup => (
            // Apply the header row props
            <tr {...headerGroup.getHeaderGroupProps()}>
              {// Loop over the headers in each row
              headerGroup.headers.map(column => (
                // Apply the header cell props
                <th {...column.getHeaderProps()}>
                  {// Render the header
                  column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {// Loop over the table rows
          rows.map(row => {
            // Prepare the row for display
            prepareRow(row);
            return (
              // Apply the row props
              <tr {...row.getRowProps()}>
                {// Loop over the rows cells
                row.cells.map(cell => {
                  // Apply the cell props
                  return (
                    <td {...cell.getCellProps()}>
                      {// Render the cell contents
                      cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </TableStyles>
  );
};

export default DataTable;
