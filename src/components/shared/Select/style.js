/*export const styles={
  container: provided => ({
    ...provided,
    width: '100%',
    fontSize: 14,
    color: '#000'
  }),
  option: (provided, state) => {
    console.log(state);
    return {
    ...provided,
      background: state.isSelected ? "#33344A" : "transparent"
    }
  }
};*/
import styled from 'styled-components';
import Select from 'react-select';

export const StyledSelect = styled(Select)`
  width: 100%;
  font-size: 14px;
  color: #000;

  .react-select__control {
    box-shadow: unset;
    border-color: unset;
    border-left: none;
    border-right: none;
    border-bottom: none;
    border-top: none;
    cursor: pointer;

    :hover {
      border-color: unset;
    }
  }

  .react-select__option {
    &--is-selected,
    &--is-focused,
    :active {
      background: ${props => props.theme.colors.lightBlue};
      color: ${props => props.theme.colors.white};
    }
  }
`;
