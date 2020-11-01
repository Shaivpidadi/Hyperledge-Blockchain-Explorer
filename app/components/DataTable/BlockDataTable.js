import React from 'react';
import DataTable from './DataTable';
import TextWithEllipses from '../TextWithEllipses/TextWithEllipses';

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
        Header: 'Data Hash',
        accessor: 'datahash',
        Cell: ({ value }) => <TextWithEllipses text={value} />
      },
      {
        Header: 'Block Hash',
        accessor: 'blockhash',
        Cell: ({ value }) => <TextWithEllipses text={value} />
      },
      {
        Header: 'Previous Hash',
        accessor: 'prehash',
        Cell: ({ value }) => <TextWithEllipses text={value} />
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
