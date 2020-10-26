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
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    dummy: dummyReducer,
    auth: authReducer,
    networkStats: networkReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
