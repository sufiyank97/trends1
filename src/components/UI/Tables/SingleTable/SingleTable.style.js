import styled from 'styled-components';
import ReactTable from 'react-table';

export const StyledReactTable = styled(ReactTable)`
  border: 1px solid ${props => props.theme.background.defaultGrey} !important;
  margin: 40px 0;
  max-width: 100%;

  .rt-thead {
    box-shadow: none !important;
  }

  .rt-tr-group {
    .rt-tr {
      &.-odd {
        background: ${props => props.theme.background.default};
      }
    }
  }

  .first-column-header {
    font-weight: bold;
    box-shadow: none !important;
    text-align: left;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      white-space: normal;

      .sort-arrows-icon {
        path {
          fill: ${props => props.theme.background.defaultGrey};
        }
      }
    }
  }

  .column-header {
    font-weight: bold;
    box-shadow: none !important;
    text-align: right;

    div {
      white-space: normal;

      span {
        margin: 0 5px 0 0;
      }

      .sort-arrows-icon {
        margin-left: auto;

        path {
          fill: ${props => props.theme.background.defaultGrey};
        }
      }
    }
  }
`;
