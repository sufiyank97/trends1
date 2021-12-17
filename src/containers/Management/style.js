import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  height: 100%;
  padding: 10px;
  position: absolute;
  top: 0;
  left: 90px;
  z-index: 10;
  overflow: auto;
  background: ${props => props.theme.colors.lightBlue};
  color: ${props => props.theme.colors.white};

  /* CREATIONS WRAPPER*/
  .creations-wrapper {
    display: flex;
    width: 100%;
    min-height: 40px;
    margin-bottom: 10px;

    .add-wrapper {
      display: flex;
      height: 100%;
      align-items: center;
      margin: 0 20px 0 0;

      &.disabled {
        opacity: 0.5;
        pointer-events: none;
      }

      :first-of-type {
        width: 250px;
      }

      :last-of-type {
        input {
          width: 150px;
        }
      }

      .label {
        font-weight: bold;
        margin: 0 3px 0 0;
      }

      input {
        width: 127px;
        height: 23px;
        font-size: 14px;
      }

      .create-button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 23px;
        padding: 0 3px;
        background: ${props => props.theme.colors.green};
        color: ${props => props.theme.colors.white};
        border-top: 1px solid #696969;
        border-bottom: 1px solid #696969;
        border-right: 1px solid #696969;
        margin: 0 3px 0 0;
        font-size: 0.8rem;
        cursor: pointer;
      }

      .add-button {
        height: 23px;
        width: 23px;
        background: ${props => props.theme.colors.green};
        color: ${props => props.theme.colors.white};
        cursor: pointer;
        font-size: 23px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 2px;
      }
    }
  }

  /* FILTERS WRAPPER */
  .filters-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 40px;

    .checkbox-wrapper {
      display: flex;
      align-items: center;
      cursor: pointer;

      span {
        margin: 0 10px 0 5px;
      }
    }
  }

  .lists-wrapper {
    display: flex;
    height: 100%;
    width: 100%;

    input {
      width: 150px;
      height: 23px;
      font-size: 14px;
      margin: 10px 5px 10px 0;
    }

    .folders-list-wrapper {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 250px;
      word-break: break-word;
      margin: 0 10px 0 0;

      .field-wrapper {
        display: flex;
        align-items: center;

        > div {
          width: 20px;
          height: 20px;
        }

        svg {
          height: 100%;
          width: 100%;
          fill: ${props => props.theme.colors.white};
        }
      }

      .list {
        display: flex;
        flex-direction: column;
        flex: 1;
        box-shadow: inset 0 0 5px 0 ${props => props.theme.colors.darkBlue};
        padding: 2px;
        overflow: auto;
      }
    }

    .dashboards-list-wrapper {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 700px;

      .field-wrapper {
        display: flex;
        align-items: center;

        > div {
          width: 20px;
          height: 20px;
        }

        svg {
          height: 100%;
          width: 100%;
          fill: ${props => props.theme.colors.white};
        }
      }

      .list {
        display: flex;
        flex-direction: column;
        flex: 1;
        box-shadow: inset 0 0 5px 0 ${props => props.theme.colors.darkBlue};
        padding: 8px;
        overflow: auto;

        .list-item {
          padding: 3px;
          width: 100%;
          min-height: 30px;
          border-bottom: 1px solid ${props => props.theme.colors.white};
          background: ${props => props.theme.colors.lightBlue};
        }

        .empty {
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
`;
