import React, { useCallback, useEffect } from 'react';
import {
  Card,
  Layout,
  SkeletonBodyText,
  SkeletonThumbnail,
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

import { networkDetailsRequest, getBlocklistRequest } from '../../store/actions';
import LoadingLayout from '../../components/LoadingLayout/LoadingLayout';

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
  // const [isEverythingLoaded, updateIsEverythingLoaded] = useState(false);
  const { networkStats } = useSelector(state => state.networkStats);
  const { blockList } = useSelector(state => state.block);

  const dispatch = useDispatch();



  // useEffect(() => {
  //   if (Object.keys(networkStats).length === 0) {
  //     dispatch(networkDetailsRequest());
  //   }
  // }, [networkStats]);

  useEffect(() => {
    dispatch(getBlocklistRequest());
    dispatch(networkDetailsRequest());
  }, [])

  let orgData = txByOrg?.rows || [];

  orgData = orgData.map(({ creator_msp_id, count }) => ({
    name: creator_msp_id,
    uv: count,
    pv: count,
    fill: getOrgColor(creator_msp_id),
  }));
  const handleImportedAction = useCallback(
    () => console.log('Imported action'),
    [],
  );

  const handleExportedAction = useCallback(
    () => console.log('Exported action'),
    [],
  );

  const dropdownMenuList = [
    {
      content: 'Import file',
      onAction: handleImportedAction,
    },
    {
      content: 'Export file',
      onAction: handleExportedAction,
    },
  ];

  const isEverythingLoaded = !!Object.keys(networkStats).length && !!blockList;
  return (
    <div style={{ marginTop: '40px' }}>
      <Card sectioned>
        <Card.Header title="Blockchain Explorer">
          <Dropdown title="tx / block" dropdownMenuList={dropdownMenuList} />
        </Card.Header>
        <Card.Section>
          <div style={{ overflowX: 'auto', marginTop: '20px' }}>
            {isEverythingLoaded ? (
              <ExplorerBarChart
                width={1100}
                height={110}
                onBarClick={data => {
                  console.log({ data });
                  history.push('/block');
                }}
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
                              onClick={() => history.push('/block')}
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
    </div>
  );
};

export default HomePage;
