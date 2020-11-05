import React from 'react';
import DataTable from './DataTable';
import TextWithEllipses from '../TextWithEllipses/TextWithEllipses';

const ChannelDataTable = ({ rowsData, isLoading }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
        Cell: ({ value }) => <TextWithEllipses text={value} />
      },
      {
        Header: 'Channel Name',
        accessor: 'channelname',
      },
      {
        Header: 'Blocks',
        accessor: 'blocks',
      },
      {
        Header: 'Transactions',
        accessor: 'transactions',
      },
      {
        Header: 'Timestamp',
        accessor: 'createdat',
        Cell: ({ value }) => <TextWithEllipses text={value} />
      }
    ],
    [],
  );

  return (
    <DataTable
      rowsData={rowsData}
      columns={columns}
      onRowClick={(data) => console.log(data)}
      isLoading={isLoading}
      hideFilters
    />
  )
}

export default ChannelDataTable;
