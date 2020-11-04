import React from 'react';
import { TextContainer, DisplayText, SkeletonBodyText, Card } from '@shopify/polaris';

import './NeumorphicCard.scss';

const statsMap = {
  latestBlock: 'Blocks',
  txCount: 'Transactions',
  peerCount: 'Node',
  chaincodeCount: 'Chaincode'
};

const NeumorphicCard = ({ title, value }) => {
  return (
    <div className="containerCard">
      <div className="neumorphic">
        <TextContainer>
          <DisplayText element="h1" size="medium">{statsMap[title]}</DisplayText>
          <DisplayText size="medium">{value}</DisplayText>
        </TextContainer>
      </div>
    </div>
  )
}

export default NeumorphicCard;
