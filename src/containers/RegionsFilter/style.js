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

export const Checkboxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  width: 50%;
  align-items: center;

  span {
    color: ${props => props.theme.colors.white};
    margin-left: 5px;
    transition: 0.3s all ease;
  }
`;
