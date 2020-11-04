import React from 'react';
import DataTable from './DataTable';
import TextWithEllipses from '../TextWithEllipses/TextWithEllipses';

const NetworkDataTable = ({ rowsData }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Peer Name',
        accessor: 'server_hostname',
        Cell: ({ value }) => <TextWithEllipses text={value} />
      },
      {
        Header: 'Requested Url',
        accessor: 'requests',
        Cell: ({ value }) => <TextWithEllipses text={value} />
      },
      {
        Header: 'Peer Type',
        accessor: 'peer_type',
      },
      {
        Header: 'MSPID',
        accessor: 'mspid',
      },
      {
        Header: 'High',
        accessor: 'ledger_height_high',
      },
      {
        Header: 'Low',
        accessor: 'ledger_height_low'
      },
      {
        Header: 'Unsigned',
        accessor: 'ledger_height_unsigned',
        Cell: ({ value }) => value.toString()
      }
    ],
    [],
  );

  return (
    <DataTable
      rowsData={rowsData}
      columns={columns}
      onRowClick={(data) => console.log(data)}
      hideFilters
    />
  )
}

export default NetworkDataTable;
