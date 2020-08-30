import React from 'react';
import { Card, Icon, Avatar, Tag } from '@shopify/polaris';
import blockLogo from '../../assets/images/block.svg';

const SingleBlockCard = () => (
  <Card>
    <div
      style={{
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
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
            124124124
          </span>
        </div>
        <div>
          <span style={{ color: 'rgb(0, 0, 0)' }}>{'wrw3erwer'}</span>
        </div>
      </div>

      <div style={{ display: 'inline-block' }}>
        <div>
          <span
            style={{
              color: 'rgb(93, 106, 133)',
              width: '110px',
              display: 'inline-block',
            }}
          >
            Channel Name:
          </span>
          <span
            style={{
              color: 'rgb(93, 106, 133)',
            }}
          >
            Shaiv
          </span>
        </div>

        <div>
          <span
            style={{
              color: 'rgb(93, 106, 133)',
              width: '110px',
              display: 'inline-block',
            }}
          >
            Channel Name:
          </span>
          <span
            style={{
              color: 'rgb(93, 106, 133)',
            }}
          >
            Shaiv
          </span>
        </div>
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

export default SingleBlockCard;
