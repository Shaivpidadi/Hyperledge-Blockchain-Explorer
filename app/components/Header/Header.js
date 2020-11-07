import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Avatar, TextField } from '@shopify/polaris';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import { getChannelListRequest, changeChannelRequest } from '../../store/actions';
import './Header.scss';

const Header = () => {
  const [searchValue, setSeachValue] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const { channelList, currentChannel } = useSelector(state => state.channel);
  const localCurrentChannel = localStorage.getItem('currentChannel');

  // console.log({ localCurrentChannel })
  useEffect(() => {
    if (!channelList.length) {
      dispatch(getChannelListRequest());
    }
  }, []);

  const channelListOptions = useMemo(() => {
    return channelList?.map((channelDetails) => ({
      ...channelDetails,
      label: channelDetails.channelname,
      value: channelDetails.channelname
    }))
  }, [channelList]);

  const handleChannelChange = useCallback(({ channel_genesis_hash }) => {
    console.log('called');
    dispatch(changeChannelRequest({ channelGenesis: channel_genesis_hash }));
    localStorage.setItem('currentChannel', channel_genesis_hash);
  })

  const getDefaultChannel = channelList.find(({ channel_genesis_hash }) => localCurrentChannel === channel_genesis_hash);

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

      {/* Temporary Removing global search */}

      {/* <div style={{ width: '350px' }}>
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
    </div> */}

      <div style={{ width: '350px', zIndex: 19 }}>
        <Select
          defaultValue={!!getDefaultChannel ? getDefaultChannel.channelname : ''}
          onChange={handleChannelChange}
          options={channelListOptions}
        />
      </div>
    </div >
  );
};

export default Header;
