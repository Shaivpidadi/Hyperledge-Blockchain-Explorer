import React from 'react';
import { useTable, usePagination, useGlobalFilter } from 'react-table';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Button, TextField } from '@shopify/polaris';
import { motion, AnimatePresence } from 'framer-motion';

import './DataTable.scss';
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
  const history = useHistory();
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
    { columns, data, initialState: { pageIndex: 0 } },
    useGlobalFilter,
    usePagination,
  );

  const spring = React.useMemo(
    () => ({
      type: 'spring',
      damping: 50,
      stiffness: 100,
    }),
    [],
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
                <motion.th
                  {...column.getHeaderProps({
                    layoutTransition: spring,
                  })}
                >
                  {// Render the header
                  column.render('Header')}
                </motion.th>
              ))}
            </tr>
          ))}
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          <AnimatePresence>
            {// Loop over the table rows
            page.map(row => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <motion.tr
                  {...row.getRowProps({
                    layoutTransition: spring,
                    exit: { opacity: 0, maxHeight: 0 },
                  })}
                  // onClick={() => console.log(row.values)}
                  onClick={() => history.push(`/tx/${row.values.blockNumber}`)}
                  className="flip-horizontal-top"
                >
                  {// Loop over the rows cells
                  row.cells.map(cell => {
                    // Apply the cell props
                    return (
                      <motion.td
                        {...cell.getCellProps({
                          layoutTransition: spring,
                        })}
                        className="highlight"
                      >
                        {// Render the cell contents
                        cell.render('Cell')}
                      </motion.td>
                    );
                  })}
                </motion.tr>
              );
            })}
          </AnimatePresence>
        </tbody>
      </table>

      {/*  Pagination */}
      <div
        className="pagination"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 5px',
          alignItems: 'center',
        }}
      >
        <span>
          <Button
            size="slim"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {'<<'}
          </Button>{' '}
          <Button
            size="slim"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            {'<'}
          </Button>{' '}
          <Button
            size="slim"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            {'>'}
          </Button>{' '}
          <Button
            size="slim"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {'>>'}
          </Button>{' '}
        </span>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 25, 50].map(pageSize => (
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
