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

export const RadioButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const RadioButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

  span {
    color: ${props => props.theme.colors.white};
    margin-left: 5px;
    transition: 0.3s all ease;
  }
`;