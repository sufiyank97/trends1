import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 90px;
  min-width: 0;
  height: 100%;
  background: ${props => props.theme.colors.lightBlue};
  padding: 0;
  z-index: 10;
  transition: 0.3s all ease;
  overflow: auto;

  &.active {
    min-width: 240px;
    padding: 70px 10px 10px 10px;
  }

  &.pinned {
    position: relative;
    top: unset;
    left: unset;
  }
`;

export const PinIconWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :hover,
  &.active {
    transform: rotateZ(45deg);

    svg {
      path {
        fill: ${props => props.theme.colors.white};
      }
    }
  }

  svg {
    height: 20px;
    width: 20px;

    path {
      fill: ${props => props.theme.colors.inactive};
    }
  }
`;

export const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.white};
  padding: 10px;
  z-index: 10;
`;

export const FilterSectionHeader = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.colors.white};

  span {
    font-size: 0.8rem;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s all ease;

    :hover {
      color: ${props => props.theme.colors.inactive};
    }
  }

  svg {
    height: 15px;
    width: 15px;
    cursor: pointer;
    fill: ${props => props.theme.colors.white};

    path {
      fill: ${props => props.theme.colors.white};
    }
  }

  :hover {
    svg {
      fill: ${props => props.theme.colors.inactive};

      path {
        fill: ${props => props.theme.colors.inactive};
      }
    }
  }
`;

export const FilterSectionBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 0;
  overflow: hidden;

  &.active {
    height: unset;
    overflow: unset;
  }
`;

export const FilterSubSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 60px;
  margin: 4px 0;
  opacity: 0.8;
  transition: 0.3s all ease;

  span {
    font-size: 0.8rem;
    color: ${props => props.theme.colors.white};
    margin-bottom: 5px;
  }

  :hover {
    opacity: 1;
  }
`;

export const PopperArrowLeft = styled.div`
  position: absolute;
  left: -19px;
  border-color: transparent ${props => props.theme.colors.lightBlue};
  border-style: solid;
  border-width: 20px 20px 20px 0;
`;

export const PopperContainer = styled.div`
  box-shadow: 0 0 15px 0 ${props => props.theme.colors.darkBlue};
  position: relative;
`;

export const PopperCloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  svg {
    height: 15px;
    width: 15px;
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
