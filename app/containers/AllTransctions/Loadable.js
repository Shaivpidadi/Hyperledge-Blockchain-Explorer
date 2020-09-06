/**
 *
 * Asynchronously loads the component for AllTransctions
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
