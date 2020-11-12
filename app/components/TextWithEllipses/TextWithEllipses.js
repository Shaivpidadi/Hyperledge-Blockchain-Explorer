import React from 'react';
import propTypes from 'prop-types';
import { Tooltip, Tag } from '@shopify/polaris';

const TextWithEllipses = ({ text, lengthLimit, asTag }, props) => {
  if (!!text && text.length > lengthLimit) {
    return (
      <Tooltip
        light
        content={text}
        dismissOnMouseOut
        preferredPosition="above"
        asTag
        {...props}
      >

        {asTag ? <Tag> {text.substring(0, lengthLimit - 3).trim()}... </Tag>
          : <div>{text.substring(0, lengthLimit - 3).trim()}...</div>}

      </Tooltip>
    );
  }

  return text || null;
};

TextWithEllipses.defaultProps = {
  lengthLimit: 15,
  asTag: false
};

export default TextWithEllipses;
