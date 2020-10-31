import React from 'react';
import DataTable from './DataTable';

const TransactionDataTable = ({ rowsData, onTransactionClick, onDateChange, dropdownOptions, onSelectChange }) => {

  const columns = React.useMemo(
    () => [
      {
        Header: 'Creator',
        accessor: 'creator',
      },
      {
        Header: 'Channel Name',
        accessor: 'channelName',
      },
      {
        Header: 'Tx Id',
        accessor: 'txId',
      },
      {
        Header: 'Type',
        accessor: 'type',
      },
      {
        Header: 'Chaincode',
        accessor: 'chaincode',
      },
      {
        Header: 'Timestamp',
        accessor: 'timestamp',
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
