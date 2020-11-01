import React from 'react';
import DataTable from './DataTable';

const BlockDataTable = ({ rowsData, onBlockClick, onDateChange, dropdownOptions, onSelectChange, onResetClick }) => {

  const columns = React.useMemo(
    () => [
      {
        Header: 'Block Number',
        accessor: 'blocknum', // accessor is the "key" in the data
      },
      {
        Header: 'Channel Name',
        accessor: 'channelname',
      },
      {
        Header: 'Number of Tx',
        accessor: 'txcount',
      },
      {
        Header: 'Dash Hash',
        accessor: 'datahash',
      },
      {
        Header: 'Block Hash',
        accessor: 'blockhash',
      },
      {
        Header: 'Previous Hash',
        accessor: 'prehash',
      },
      {
        Header: 'Transactions',
        accessor: 'txhash',
      },
      {
        Header: 'Size (KB)',
        accessor: 'blksize',
      },
    ],
    [],
  );

  return (
    <DataTable
      rowsData={rowsData}
      columns={columns}
      onRowClick={onBlockClick}
      onDateChange={onDateChange}
      dropdownOptions={dropdownOptions}
      onSelectChange={onSelectChange}
      onResetClick={onResetClick}
    />
  )
}

export default BlockDataTable;
