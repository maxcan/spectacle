import React from 'react';

import { LiveProvider } from 'react-live';
import { StyledLiveEditor } from './CodePane.style';

export function CodePane({ code, backgroundColor, theme }) {
  return (
    <LiveProvider theme={theme} disabled code={code}>
      <StyledLiveEditor backgroundColor={backgroundColor} />
    </LiveProvider>
  );
}
