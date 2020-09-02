import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Icon, Avatar, Tag } from '@shopify/polaris';
import TextWithEllipses from '../TextWithEllipses/TextWithEllipses';

const LabelWithValue = ({ label, value }) => (
  <div>
    <span
      style={{
        color: 'rgb(0, 0, 0)',
        width: '110px',
        display: 'inline-block',
        fontWeight: 'bolder',
      }}
    >
      {`${label}:`}
    </span>
    <span
      style={{
        color: 'rgb(93, 106, 133)',
      }}
    >
      {value}
    </span>
  </div>
);

const SingleBlockCard = ({ onClick }) => {
  return (
    <Card>
      <div
        style={{
          padding: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          cursor: 'pointer',
        }}
        onClick={onClick}
      >
        <div>
          <Avatar
            customer
            name="logo"
            source="https://banner2.cleanpng.com/20180714/rzz/kisspng-blockchain-info-cryptocurrency-bitcoin-technology-chinese-blue-5b498bcce89417.5536279015315465729527.jpg"
          />
        </div>

        <div style={{ display: 'inline-block' }}>
          <div>
            <span
              style={{
                color: 'rgb(93, 106, 133)',
                display: 'inline-block',
              }}
            >
              <TextWithEllipses text="124124124asdasdasdasd" />
            </span>
          </div>
          <div>
            <span style={{ color: 'rgb(0, 0, 0)' }}>{'wrw3erwer'}</span>
          </div>
        </div>

        <div style={{ display: 'inline-block' }}>
          <LabelWithValue label="Channel Name" value="Shaiv" />
          <LabelWithValue label="Total txs" value="12312" />
        </div>

        <div
          style={{
            display: 'flex',
            height: '40px',
            alignItems: 'center',
            fontWeight: 'bolder',
          }}
        >
          <Tag>1 min ago</Tag>
        </div>
      </div>
    </Card>
  );
};

export default SingleBlockCard;
