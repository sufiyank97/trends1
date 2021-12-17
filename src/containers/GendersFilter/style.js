import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 300px;
  height: 150px;
  background: ${props => props.theme.colors.lightBlue};
  padding: 10px 20px;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;

  &:first-of-type {
    border-right: 1px solid ${props => props.theme.colors.white};
  }
`;

export const CategoryHeading = styled.div`
  color: ${props => props.theme.colors.white};
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 10px;
  border-bottom: 1px solid ${props => props.theme.colors.white};
  padding-bottom: 5px;
`;

export const Checkboxes = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  span {
    color: ${props => props.theme.colors.white};
    margin-left: 5px;
    transition: 0.3s all ease;
  }
`;
