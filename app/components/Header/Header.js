import React, { useState } from 'react';
import { Avatar, TextField } from '@shopify/polaris';
import { useHistory } from 'react-router-dom';

import './Header.scss';
const Header = () => {
  const [searchValue, setSeachValue] = useState('');
  const history = useHistory();
  return (
    <div
      className="Header"
      style={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <div onClick={() => history.push('/')}>
        <Avatar
          customer
          name="logo"
          source="https://banner2.cleanpng.com/20180714/rzz/kisspng-blockchain-info-cryptocurrency-bitcoin-technology-chinese-blue-5b498bcce89417.5536279015315465729527.jpg"
        />
      </div>

      <div style={{ width: '350px' }}>
        <TextField
          className="explorerSearch"
          type="search"
          placeholder="Wallet address, txid, or blockheight"
          value={searchValue}
          onChange={value => setSeachValue(value)}
          autoComplete="off"
          spellCheck={false}
          autoCorrect="off"
          autoCapitalize="off"
          role="combobox"
          aria-label="Search Explorer"
        />
      </div>
    </div>
  );
};

export default Header;
