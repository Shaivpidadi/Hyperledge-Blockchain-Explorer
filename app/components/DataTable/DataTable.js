import React from 'react';
import { useTable, usePagination, useGlobalFilter } from 'react-table';
import styled from 'styled-components';
import { Button, TextField } from '@shopify/polaris';

import fakeData from './dummyData';

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
      border-radius: 5px 0px 0px 5px;
    }

    tr td:last-of-type {
      border-radius: 0px 5px 5px 0px;
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
  const data = React.useMemo(() => fakeData, []);

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
    page,
    prepareRow,

    // For Pagintation
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },

    // Search
    setGlobalFilter,
  } = useTable(
    { columns, data, initialState: { pageIndex: 2 } },
    useGlobalFilter,
    usePagination,
  );

  return (
    <TableStyles>
      <div style={{ width: '350px' }}>
        <TextField
          className="tableSearch"
          type="search"
          placeholder="Search..."
          value={globalFilter}
          onChange={value => {
            setGlobalFilter(value || undefined);
          }}
          autoComplete="off"
          spellCheck={false}
          autoCorrect="off"
          autoCapitalize="off"
          role="combobox"
          aria-label="Search table"
        />
      </div>
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
          page.map(row => {
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
      <div className="pagination">
        <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </Button>{' '}
        <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </Button>{' '}
        <Button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </Button>{' '}
        <Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </Button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </TableStyles>
  );
};

export default DataTable;
