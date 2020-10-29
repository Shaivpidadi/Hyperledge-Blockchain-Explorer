/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import dummyReducer from './store/reducer/dummy/dummy';
import authReducer from './store/reducer/auth/auth';
import networkReducer from './store/reducer/networkDetails/networkDetails';
import blockReducer from './store/reducer/block/block';
import loaderReducer from './store/reducer/loader/loader';
import transactionReducer from './store/reducer/transaction/transaction';
import channelReducer from './store/reducer/channel/channel';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    dummy: dummyReducer,
    auth: authReducer,
    networkStats: networkReducer,
    block: blockReducer,
    loader: loaderReducer,
    transaction: transactionReducer,
    channel: channelReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
