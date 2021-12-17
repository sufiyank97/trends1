import styled from 'styled-components';
import { media } from '../../../../settings/themes/defaultTheme';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  ${media.tablet`
        flex-wrap: wrap;
    `}
`;
