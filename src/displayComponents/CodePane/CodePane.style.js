import { LiveEditor } from 'react-live';
import styled from 'styled-components';

export const StyledLiveEditor = styled(LiveEditor)`
  background-color: ${props => props.backgroundColor || 'black'};
`;
