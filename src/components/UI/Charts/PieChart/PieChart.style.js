import styled from 'styled-components';
import { media } from '../../../../settings/themes/defaultTheme';

export const Wrapper = styled.div`
  width: 40%;

  .highcharts-label {
    ${props => props.labels};
  }

  .highcharts-data-label-connector {
    ${props => props.labels};
  }

  ${media.tablet`
        width: 100%;
    `}
`;
