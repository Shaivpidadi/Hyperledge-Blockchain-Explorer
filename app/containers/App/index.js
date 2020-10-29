import React, { useEffect } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import { AppProvider } from '@shopify/polaris';
import { useSelector, useDispatch } from 'react-redux';

import axios from '../../http/axios/axiosMain';

import HomePage from '../../containers/HomePage/Loadable';
import BlockPage from '../../containers/BlockPage/Loadable';
import NotFoundPage from '../../containers/NotFoundPage/Loadable';
import Header from '../../components/Header/Header';
import BlockInfo from '../../containers/BlockInfo/Loadable';
import TransactionPage from '../../containers/AllTransctions/Loadable';
import TransactionInfo from '../../containers/TransactionInfo/Loadable';
import LoginPage from '../../containers/LoginPage/Loadable';
import GlobalStyle from '../../global-styles';
import { getCurrentChannelRequest } from '../../store/actions';

const App = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { userToken: auth } = useSelector(state => state.auth);
  const isCurrentChannelPresent = !!localStorage.getItem('currentChannel');

  useEffect(() => {
    const authorizationToken = localStorage.getItem('userToken');
    const token = `bearer ${authorizationToken}`;
    if (authorizationToken) {
      axios.defaults.headers.common['Authorization'] = token;

      if (!isCurrentChannelPresent) {
        dispatch(getCurrentChannelRequest());
      }

    } else {
      axios.defaults.headers.common['Authorization'] = null;
    }
  }, []);

  useEffect(() => {
    if (location.pathname !== '/login' && !auth) {
      history.push('/login');
    } else if (location.pathname === '/login' && auth) {
      history.push('/');
    }
  }, [auth, history, location.pathname]);

  return (
    <div>
      <AppProvider>
        <Header />
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route exact path="/" component={HomePage} />
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
