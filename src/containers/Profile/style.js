import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 90px;
  min-width: 0;
  height: 100%;
  background: ${props => props.theme.colors.lightBlue};
  color: ${props => props.theme.colors.white};
  padding: 0;
  z-index: 10;
  overflow: hidden;

  &.active {
    min-width: 400px;
    padding: 20px;
  }
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.7rem;
  margin-bottom: 10px;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SectionHeading = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.white};
  padding: 0 0 4px 0;
  font-weight: bold;
`;

export const SectionContent = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0 20px 55px;
`;

export const TextWithLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
`;

export const TextWithLabel = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
  font-size: 14px;
  margin-bottom: 15px;

  span {
    height: 24px;
  }

  .label {
    display: flex;

    > *:first-of-type {
      margin-right: 5px;
    }

    svg {
      width: 15px;
      height: 15px;
      cursor: pointer;

      path {
        fill: ${props => props.theme.colors.inactive};
      }

      :hover {
        path {
          fill: ${props => props.theme.colors.white};
        }
      }
    }
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;

  > span {
    display: flex;
    margin-bottom: 5px;
  }
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${props => props.theme.colors.white};
  height: 90px;
  min-width: 90px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: auto;
  justify-content: flex-end;

  > button:first-of-type {
    margin: 0 10px;
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 0 10px;
`;

export const CloseIconWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;

    path {
      fill: ${props => props.theme.colors.inactive};
    }

    :hover {
      path {
        fill: ${props => props.theme.colors.white};
      }
    }
  }
`;
