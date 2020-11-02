import React from 'react';
import DataTable from './DataTable';
import TextWithEllipses from '../TextWithEllipses/TextWithEllipses';
import moment from 'moment';
import { Tag } from '@shopify/polaris';

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
        Cell: ({ value }) => <TextWithEllipses text={value} />
      },
      {
        Header: 'Type',
        accessor: 'type',
        Cell: ({ value }) => {
          // Need to add map later
          if (value === 'ENDORSER_TRANSACTION') {
            return 'Endorser'
          } else {
            <TextWithEllipses text={value} />
          }
        }
      },
      {
        Header: 'Chaincode',
        accessor: 'chaincodename',
      },
      {
        Header: 'Timestamp',
        accessor: 'createdt',
        Cell: ({ value }) => <Tag>{moment(value).fromNow()}</Tag>
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
