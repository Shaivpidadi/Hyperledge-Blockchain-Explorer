import React, { forwardRef } from 'react';
import { css } from 'styled-components';

const HiddenScroll = forwardRef(({ children, ...props }, ref) => {
  const { height } = props;

  return (
    <div
      ref={ref}
      css={css({
        maxHeight: height,
        msOverflowStyle: 'none',
        overflow: '-moz-scrollbars-none',
        overflowY: 'scroll',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
          width: '0 !important',
        },
      })}
      {...props}
    >
      {children}
    </div>
  );
});

export default HiddenScroll;
