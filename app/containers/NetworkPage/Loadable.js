/**
 *
 * Asynchronously loads the component for Network
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
