/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppProvider } from '@shopify/polaris';

import HomePage from '../../containers/HomePage/Loadable';
import BlockPage from '../../containers/BlockPage/Loadable';
import NotFoundPage from '../../containers/NotFoundPage/Loadable';
import Header from '../../components/Header/Header';
import BlockInfo from '../../containers/BlockInfo/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <AppProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/block" component={BlockPage} />
          <Route exact path="/block/:blockId" component={BlockInfo} />
          <Route component={NotFoundPage} />
        </Switch>
      </AppProvider>
      <GlobalStyle />
    </div>
  );
}
