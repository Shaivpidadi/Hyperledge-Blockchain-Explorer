import React, { useState } from 'react';
import { useTable, usePagination, useGlobalFilter } from 'react-table';
import styled from 'styled-components';
import { Button, TextField, SkeletonBodyText } from '@shopify/polaris';
import { motion, AnimatePresence } from 'framer-motion';
import Select from "react-select";

import './DataTable.scss';
import Calender from '../Calender/Calender';

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

const TableDataLoadingState = ({ length }) => {
  return (Array(length).fill(0).map((_, idx) => (
    <tr className='loading' key={idx}>
      {
        Array(length).fill(0).map((_, idx) => (
          <td key={idx}> <SkeletonBodyText lines={2} /></td>
        ))
      }
    </tr>
  )))
}

const DataTable = ({ columns, rowsData, onRowClick, onDateChange, dropdownOptions, onSelectChange, onResetClick, hideFilters, isLoading }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,

    // For Pagination
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
    { columns, data: rowsData, initialState: { pageIndex: 0 } },
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

  const selectChangeHandler = (selectedValue) => {
    setSelectedOption(selectedValue);
    let orgValue = '';
    selectedValue?.map(({ value }, index) => {
      orgValue += `orgs=${value}${index === selectedValue.length - 1 ? '' : '&&'}`;
    });
    onSelectChange(orgValue);
  };

  const onDateChangeHandler = ({ start, end }) => {
    const query = `from=${start}&&to=${end}`;
    onDateChange(query);
  };

  return (
    <TableStyles>
      <div style={{ marginTop: '25px', display: 'flex' }}>
        <div style={{ flex: 1, width: '25%', marginRight: '10px' }}>
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

        {hideFilters ? null : (
          <>
            <div style={{ flex: 1, width: '25%', marginRight: '10px' }}>
              <Calender onChangeDate={onDateChangeHandler} />
            </div>

            <div style={{ flex: 1, width: '25%', marginRight: '10px' }}>
              <Select
                defaultValue={selectedOption}
                onChange={selectChangeHandler}
                options={dropdownOptions}
                isMulti
              />
            </div>

            <div style={{ flex: 1, width: '25%' }}>
              <Button onClick={onResetClick}>Reset</Button>
            </div>
          </>
        )}

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
          {isLoading ? <TableDataLoadingState length={columns.length} /> :
            rowsData?.length === 0 ? <div>Blank</div> :
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
                        onClick={() => onRowClick(row.values)}
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
              </AnimatePresence>}
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

DataTable.defaultProps = {
  hideFilters: false,
};

export default DataTable;
