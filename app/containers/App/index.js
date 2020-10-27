import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppProvider } from '@shopify/polaris';

import HomePage from '../../containers/HomePage/Loadable';
import BlockPage from '../../containers/BlockPage/Loadable';
import NotFoundPage from '../../containers/NotFoundPage/Loadable';
import Header from '../../components/Header/Header';
import BlockInfo from '../../containers/BlockInfo/Loadable';
import TransactionPage from '../../containers/AllTransctions/Loadable';
import TransactionInfo from '../../containers/TransactionInfo/Loadable';
import LoginPage from '../../containers/LoginPage/Loadable';
import GlobalStyle from '../../global-styles';

const App = () => {
  return (
    <div>
      <AppProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/block" component={BlockPage} />
          <Route exact path="/block/:blockId" component={BlockInfo} />
          <Route exact path="/transactions" component={TransactionPage} />
          <Route exact path="/tx/:txId" component={TransactionInfo} />
          <Route component={NotFoundPage} />
        </Switch>
      </AppProvider>
      <GlobalStyle />
    </div>
  );
};

export default App;
