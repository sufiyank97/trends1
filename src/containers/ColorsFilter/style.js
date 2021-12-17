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
