import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Card,
  Layout,
  SkeletonBodyText,
  SkeletonThumbnail,
  ButtonGroup,
  Button
} from '@shopify/polaris';
import { useDispatch, useSelector } from 'react-redux';

import ExplorerBarChart from '../../components/Charts/BarChart/BarChart';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import BlockchainCard from '../../components/BlockchainCard/BlockchainCard';
import SingleBlockCard from '../../components/SingleBlockCard/SingleBlockCard';
import HiddenScroll from '../../components/HiddenScroll/HiddenScroll';
import RadicalChart from '../../components/Charts/RadicalChart/RadicalChart';

// import blockList from '../../../mock-data/blockList.json';
import txByOrg from '../../../mock-data/txByOrg.json';
import getOrgColor from '../../components/Charts/getOrgColor';

import { networkDetailsRequest, getBlocklistRequest, getTransactionByOrgRequest, getTransactionByHourRequest, getTransactionByMinuteRequest, getCurrentChannelRequest, getNetworkListRequest, getChannelListRequest } from '../../store/actions';
import LoadingLayout from '../../components/LoadingLayout/LoadingLayout';
import SetTokenInterval from '../../hoc/SetTokenHeader/SetTokenHeader';
import axiosMain from '../../http/axios/axiosMain';
import NeumorphicCard from '../../components/NeumorphicCard/NeumorphicCard';

const SkeletonBlockCard = () => (
  <div style={{ display: 'flex', alignItems: 'center', marginTop: '25px' }}>
    <div style={{}}>
      <SkeletonThumbnail size="small" />
    </div>
    <div style={{ width: '90%', marginLeft: '20px' }}>
      <SkeletonBodyText />
    </div>
  </div>
);

const HomePage = ({ history }) => {
  const [selectedTransactionChart, updateSelectedTransactionChart] = useState('TX / Hour')
  const { networkStats } = useSelector(state => state.networkStats);
  const { blockList } = useSelector(state => state.block);
  const { txsByOrg, txsByHour, txsByMinute } = useSelector(state => state.transaction);
  const { currentChannel } = useSelector(state => state.channel);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!!currentChannel) {
      dispatch(getBlocklistRequest());
      dispatch(networkDetailsRequest());
      dispatch(getTransactionByOrgRequest());
      dispatch(getTransactionByHourRequest());
      dispatch(getTransactionByMinuteRequest());
      dispatch(getNetworkListRequest());
      dispatch(getChannelListRequest());
    } else {
      dispatch(getCurrentChannelRequest())
    }
  }, [currentChannel])

  const orgData = useMemo(() => {
    let txs = txsByOrg || [];

    return txs.map(({ creator_msp_id, count }) => ({
      name: creator_msp_id,
      uv: count,
      pv: count,
      fill: getOrgColor(creator_msp_id),
    }))
  }, [txsByOrg]);

  const handleTxHourAction = useCallback(() => {
    updateSelectedTransactionChart('TX / Hour')
  }, []);

  const handleTxMinuteAction = useCallback(() => {
    updateSelectedTransactionChart('TX / Minute')
  }, []);

  const txsChartData = useMemo(() => {
    let txsData = selectedTransactionChart === 'TX / Minute' ? txsByMinute : txsByHour;

    txsData = txsData?.slice(0, 30).map((txs) => {
      return ({
        ...txs,
        name: 'Name',
        uv: txs.count,
        pv: txs.count,
        amt: txs.count,
      })
    });

    return txsData;
  }, [txsByHour, txsByMinute, selectedTransactionChart]);

  const isEverythingLoaded = !!Object.keys(networkStats).length && !!blockList && !!txsByOrg && !!txsChartData;

  return (
    <div style={{ marginTop: '40px' }}>
      <Card sectioned>
        <Card.Header title="Blockchain Explorer">
          <ButtonGroup segmented>
            <Button
              onClick={handleTxHourAction}
              disabled={selectedTransactionChart === 'TX / Hour'}
              outline
            >
              TX / Hour
            </Button>

            <Button
              onClick={handleTxMinuteAction}
              disabled={selectedTransactionChart === 'TX / Minute'}
              outline
            >
              TX / Minute
            </Button>
          </ButtonGroup>
        </Card.Header>
        <Card.Section>
          <div style={{ overflowX: 'auto', marginTop: '20px' }}>
            {isEverythingLoaded ? (
              <ExplorerBarChart
                width={1100}
                height={110}
                data={txsChartData}
              // API ONLY RETURNS NUMBER, NEED TO CREATE SOME LOGIC FOR REDIRECTION

              // onBarClick={data => {
              //   console.log({ data });
              //   history.push('/block');
              // }}
              />
            ) : (
                <SkeletonBodyText />
              )}
          </div>
        </Card.Section>
      </Card>

      <div style={{ margin: '20px 0px', minHeight: '500px' }}>
        <Card>
          <Layout style={{ margin: '0px !important' }}>
            <Layout.Section oneHalf>
              <Card sectioned title="Latest Blocks">
                <div
                  style={{
                    padding: '0px 20px',
                  }}
                >
                  <HiddenScroll height="400px">
                    {isEverythingLoaded ? (
                      blockList.map(
                        ({
                          blockhash,
                          blocknum,
                          channelname,
                          txcount,
                          createdt,
                        }) => (
                            <SingleBlockCard
                              key={blocknum}
                              onClick={() => history.push(`/block/${blocknum}`)}
                              blockHash={blockhash}
                              blockNumber={blocknum}
                              channelName={channelname}
                              totalTxs={txcount}
                              timeStamp={createdt}
                            />
                          ),
                      )
                    ) : (
                        <>
                          {Array(10)
                            .fill(1)
                            .map((_, idx) => (
                              <SkeletonBlockCard key={idx} />
                            ))}
                        </>
                      )}
                  </HiddenScroll>
                </div>
              </Card>
            </Layout.Section>
            <Layout.Section oneHalf>
              <Card sectioned title="Transactions by Organization">
                <div style={{ minHeight: '400px' }}>
                  {isEverythingLoaded ? (
                    <RadicalChart data={orgData} />
                  ) : (
                      <Card.Section>
                        <SkeletonBodyText />
                      </Card.Section>
                    )}
                </div>
              </Card>
            </Layout.Section>
          </Layout>
        </Card>
      </div>

      <div style={{ marginTop: '2px' }}>
        {isEverythingLoaded ? (
          <BlockchainCard
            title="Blockchain Stats"
            cardItems={networkStats}
            isLoading={isEverythingLoaded}
          />
        ) : (
            <Card sectioned>
              <Card.Header title="Blockchain Stats" />
              <Card.Section>
                <SkeletonBodyText />
              </Card.Section>
            </Card>
          )}
      </div>

      <div style={{ marginTop: '20px' }}>
        <Card sectioned>
          <Card.Header title="Blockchain Stats" />
          <Card.Section>
            <NeumorphicCard />
          </Card.Section>
        </Card>
      </div>
    </div>
  );
};

export default SetTokenInterval(HomePage, axiosMain);
