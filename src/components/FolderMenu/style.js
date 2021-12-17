import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${props => props.theme.colors.white};
`;

export const ListItem = styled.div`
  display: flex;
  width: 150px;
  height: 30px;
  background: ${props => props.theme.colors.darkBlue};
  align-items: center;
  padding: 0 10px;
  transition: 0.3s all ease;

  :hover {
    background: ${props => props.theme.colors.lightBlue};
  }
`;
