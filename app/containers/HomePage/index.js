import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Card,
  Layout,
  SkeletonBodyText,
  SkeletonThumbnail,
  ButtonGroup,
  Button,
} from '@shopify/polaris';
import { useDispatch, useSelector } from 'react-redux';

import ExplorerBarChart from '../../components/Charts/BarChart/BarChart';
import SingleBlockCard from '../../components/SingleBlockCard/SingleBlockCard';
import HiddenScroll from '../../components/HiddenScroll/HiddenScroll';
import RadicalChart from '../../components/Charts/RadicalChart/RadicalChart';

import getOrgColor from '../../components/Charts/getOrgColor';

import { networkDetailsRequest, getBlocklistRequest, getTransactionByOrgRequest, getTransactionByHourRequest, getTransactionByMinuteRequest, getCurrentChannelRequest, getNetworkListRequest, getChannelListRequest, getBlockAndTransactionsListRequest } from '../../store/actions';
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
  const { txsByOrg, txsByHour, txsByMinute, blockTxsList } = useSelector(state => state.transaction);
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
      dispatch(getBlockAndTransactionsListRequest());
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

  const latestBlockList = blockTxsList.length !== 0 ? blockTxsList : blockList;

  const isEverythingLoaded = !!Object.keys(networkStats).length && !!blockList && !!txsByOrg && !!txsChartData && !!blockTxsList;

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

            {/* <Button
              onClick={handleTxMinuteAction}
              disabled={selectedTransactionChart === 'TX / Minute'}
              outline
            >
              TX / Minute
            </Button> */}
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
              //   history.push('/block');
              // }}
              />
            ) : (
                <SkeletonBodyText />
              )}
          </div>
        </Card.Section>
      </Card>

      <div style={{ marginTop: '20px', justifyContent: 'space-between', display: "flex" }}>
        {Object.entries(networkStats).map((value) => (
          <NeumorphicCard key={value[0]} title={value[0]} value={value[1]} />
        )
        )}
      </div>

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
                      latestBlockList.map(
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


      {/* Might be using this design in future */}

      {/* <div style={{ marginTop: '2px' }}>
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
      </div> */}

    </div >
  );
};

export default SetTokenInterval(HomePage, axiosMain);
