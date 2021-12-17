import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  background: ${props => props.theme.colors.lightBlue};
  padding: 10px 20px;
`;

export const CategoryHeading = styled.div`
  color: ${props => props.theme.colors.white};
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const IconButtonsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-height: 250px;
  min-height: 250px;
  box-shadow: inset 0 0 5px 0 ${props => props.theme.colors.darkBlue};
  padding: 2px;
`;

export const IconButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  min-width: 25%;
  border: 1px solid ${props => props.theme.colors.white};
  cursor: pointer;
  transition: 0.3s all ease;

  :hover {
    background: ${props => props.theme.colors.darkBlue};
  }

  svg {
    height: 20px;
    width: 20px;
    fill: ${props => props.theme.colors.white};
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CountriesList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-height: 250px;
  min-height: 250px;
  box-shadow: inset 0 0 5px 0 ${props => props.theme.colors.darkBlue};
  padding: 2px;
  overflow: auto;
  margin: 0 0 10px 0;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 3px 10px;
  width: 100%;
  min-height: 50px;
  border-bottom: 1px solid white;
  background: ${props => props.theme.colors.lightBlue};

  span {
    color: ${props => props.theme.colors.white};
    transition: 0.3s all ease;
  }
`;

export const FieldWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  > div {
    width: 15px;
    height: 15px;
    position: absolute;
    top: 5px;
    left: 10px;
  }

  input {
    padding-left: 35px;
  }

  svg {
    height: 100%;
    width: 100%;
    fill: ${props => props.theme.colors.white};
  }
`;

export const RequestButton = styled.div`
  color: ${props => props.theme.colors.white};
  font-size: 0.7rem;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.3s all ease;

  :hover {
    color: ${props => props.theme.colors.lightGrey};
  }
`;
