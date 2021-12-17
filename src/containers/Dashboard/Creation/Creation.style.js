import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 600px;
  padding: 0.5rem;

  /* CREATIONS WRAPPER*/
  .creations-wrapper {
    display: flex;
    width: 100%;
    min-height: 40px;

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
        border-radius: 4px 0 0 4px;
        width: 127px;
        height: 23px;
        padding: 0 0 0 3px;
        font-size: 14px;
        border: 1px solid #696969;
      }

      .create-button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 23px;
        padding: 0 3px;
        background: #ccc;
        color: black;
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
        background: black;
        color: white;
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
    flex: 1;
    margin: 0 0 20px 0;

    input {
      border-radius: 4px;
      width: 150px;
      height: 23px;
      padding: 0 0 0 3px;
      font-size: 14px;
      border: 1px solid #696969;
      margin: 10px 0;
    }

    .folders-list-wrapper {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 250px;
      word-break: break-word;
      margin: 0 20px 0 0;

      .list {
        display: flex;
        flex-direction: column;
        flex: 1;
        border: 1px solid #696969;
        border-radius: 4px;
        padding: 5px;
        overflow: auto;

        .list-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 3px;
          width: 100%;
          min-height: fit-content;
          border: 1px solid #696969;
          border-radius: 4px;
          margin: 5px 0;
          cursor: pointer;

          &.active {
            background: #696969;
          }
        }
      }
    }

    .dashboards-list-wrapper {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 400px;

      .list {
        display: flex;
        flex-direction: column;
        flex: 1;
        border: 1px solid #696969;
        border-radius: 4px;
        padding: 5px;
        overflow: auto;

        .list-item {
          padding: 3px;
          width: 100%;
          min-height: 30px;
          border: 1px solid #696969;
          border-radius: 4px;
          margin: 5px 0;
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
