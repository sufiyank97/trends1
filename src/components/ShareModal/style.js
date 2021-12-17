import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  padding: 40px 30px 20px 30px;
  background: ${props => props.theme.colors.lightBlue};
`;

export const ModalHeading = styled.div`
  font-size: 2rem;
  color: white;
  margin-bottom: 30px;
`;

export const FieldWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  
  > div {
    width: 20px;
    height: 20px;
  }
  
  input {
    width: 200px;
    margin-right: 10px;
  }

  svg {
    height: 100%;
    width: 100%;
    fill: ${props => props.theme.colors.white};
  }
}
`;

export const SectionsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  height: 80%;
  margin-top: 10px;
`;

export const NonAddedSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 4;
  margin-right: 10px;
  box-shadow: inset 0 0 5px 0 ${props => props.theme.colors.darkBlue};
  padding: 10px 10px 0 10px;
  overflow: auto;
  align-items: flex-start;
  justify-content: space-between;
  align-content: flex-start;
`;

export const NonAddedItem = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  width: 49%;
  min-height: 100px;
  height: 100px;
  margin: 0 0 10px 0;
  background: ${props => props.theme.colors.lightBlue};
  box-shadow: 0 0 2px 0 ${props => props.theme.colors.inactive};
  transition: 0.3s all ease;
  
  :hover {
    background: ${props => props.theme.colors.darkBlue};
    transform: translate3d(1px, -1px, -1px);
`;

export const AddedSection = styled.div`
  display: flex;
  flex: 2;
  padding: 10px 10px 0 10px;
  flex-direction: column;
  box-shadow: inset 0 0 5px 0 ${props => props.theme.colors.darkBlue};
  overflow: auto;
  align-items: center;
`;

export const AddedItem = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  width: 98%;
  min-height: 100px;
  height: 100px;
  margin: 0 0 10px 0;
  background: ${props => props.theme.colors.lightBlue};
  box-shadow: 0 0 2px 0 ${props => props.theme.colors.inactive};
  transition: 0.3s all ease;
  
  :hover {
    background: ${props => props.theme.colors.darkBlue};
    transform: translate3d(1px, -1px, -1px);
`;

export const ItemImage = styled.div`
  width: 70px;
  height: 70px;

  img {
    max-height: 100%;
    max-width: 100%;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  .name {
    font-size: 16px;
    color: ${props => props.theme.colors.white};
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  justify-content: flex-end;

  > button:first-of-type {
    margin: 0 10px;
  }
`;

export const CloseButton = styled.div`
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
