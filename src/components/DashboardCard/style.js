import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 57px;
  min-height: 57px;
  background: ${props => props.theme.colors.lightBlue};
  box-shadow: 0 0 2px 0 ${props => props.theme.colors.inactive};
  transition: 0.3s all ease;
  margin-bottom: 8px;
  padding: 6px;
  cursor: pointer;

  button {
    opacity: 0;
  }

  &.active {
    height: 272px;
    min-height: 272px;
    overflow: unset;

    .heading {
      border-bottom: 1px solid ${props => props.theme.colors.white};
    }

    .content {
      display: flex;
      opacity: 1;
      height: 100%;
      padding: 5px 0;
      justify-content: center;
    }
  }

  :hover {
    background: ${props => props.theme.colors.darkBlue};
    transform: translate3d(1px, -1px, -1px);

    button {
      opacity: 1;
    }
  }

  .heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 45px;
    width: 100%;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    padding: 0;
    opacity: 0;
    height: 0;
    overflow: hidden;
    transition: 0.3s all ease;
  }

  .inner-wrapper {
    display: flex;
    width: 100%;
    height: 175px;
    align-items: center;
    justify-content: space-between;
  }

  .chart-wrapper {
    width: 300px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .images-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .image {
    height: 77px;
    width: 67px;
    background: grey;
  }
`;

export const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 20px;

  svg {
    height: 100%;
    width: 100%;
    cursor: pointer;
    fill: ${props => props.theme.colors.inactive};
    transition: 0.3s all ease;

    path {
      fill: ${props => props.theme.colors.inactive};
      transition: 0.3s all ease;
    }
  }

  :hover {
    svg {
      fill: ${props => props.theme.colors.white};

      path {
        fill: ${props => props.theme.colors.white};
      }
    }
  }
`;
