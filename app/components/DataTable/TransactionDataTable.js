import React from 'react';
import DataTable from './DataTable';

const TransactionDataTable = ({ rowsData, onTransactionClick, onDateChange, dropdownOptions, onSelectChange }) => {

  const columns = React.useMemo(
    () => [
      {
        Header: 'Creator',
        accessor: 'creator_msp_id',
      },
      {
        Header: 'Channel Name',
        accessor: 'channelname',
      },
      {
        Header: 'Tx Id',
        accessor: 'txhash',
      },
      {
        Header: 'Type',
        accessor: 'type',
      },
      {
        Header: 'Chaincode',
        accessor: 'chaincodename',
      },
      {
        Header: 'Timestamp',
        accessor: 'createdt',
      }
    ],
    [],
  );

  return (
    <DataTable
      rowsData={rowsData}
      columns={columns}
      onRowClick={onTransactionClick}
      onDateChange={onDateChange}
      dropdownOptions={dropdownOptions}
      onSelectChange={onSelectChange}
    />
  )
}

export default TransactionDataTable;
