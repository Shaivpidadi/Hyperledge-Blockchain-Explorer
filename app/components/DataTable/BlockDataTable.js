import React from 'react';
import DataTable from './DataTable';
import TextWithEllipses from '../TextWithEllipses/TextWithEllipses';
import { Stack } from '@shopify/polaris';

const BlockDataTable = ({ rowsData, onBlockClick, onDateChange, dropdownOptions, onSelectChange, onResetClick, isLoading }) => {

  const MultiTransactionWithEllipses = ({ txs }) => (
    <Stack vertical={true} distribution="equalSpacing" alignment="fill" spacing="extraTight">
      {txs.map((tx) =>
        <TextWithEllipses text={tx} asTag />)}
    </Stack>
  );

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
        Cell: ({ value }) => <MultiTransactionWithEllipses txs={value} />
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
      isLoading={isLoading}
    />
  )
}

export default BlockDataTable;
