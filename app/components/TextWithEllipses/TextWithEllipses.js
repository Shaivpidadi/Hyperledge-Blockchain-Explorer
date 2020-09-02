import React from 'react';
import propTypes from 'prop-types';
import { Tooltip } from '@shopify/polaris';

const TextWithEllipses = ({ text, lengthLimit }, props) => {
  if (!!text && text.length > lengthLimit) {
    return (
      <Tooltip
        light
        content={text}
        dismissOnMouseOut
        preferredPosition="above"
        {...props}
      >
        <div>{text.substring(0, lengthLimit - 3).trim()}...</div>
      </Tooltip>
    );
  }

  return text || null;
};

TextWithEllipses.defaultProps = {
  lengthLimit: 15,
};

export default TextWithEllipses;
