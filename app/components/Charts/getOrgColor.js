/**
 *    SPDX-License-Identifier: Apache-2.0
 */

/**  Functions borrowed from  https://github.com/hyperledger/blockchain-explorer */

import { sha256 } from 'js-sha256';
const intConversion = str => {
  let value = 0;
  for (let i = 0; i < str.length; i++) {
    value = str.charCodeAt(i) + ((value << 5) - value);
  }
  return value;
};

const getRGBColor = i => {
  const c = (i & 0x00ffffff).toString(16).toUpperCase();
  return '#' + '00000'.substring(0, 6 - c.length) + c;
};

const convertSha256 = str => {
  const shaString = sha256(str);
  return shaString;
};

const getOrgColor = org => {
  return getRGBColor(intConversion(convertSha256(org)));
};

export default getOrgColor;
