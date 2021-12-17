import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
`;

export const Topbar = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 70px;
  padding: 10px 0;
  border-bottom: 1px solid ${props => props.theme.background.defaultGrey};
`;

export const StyledInput = styled.input`
  padding: ${props => props.theme.input.padding.default};
  border: 1px solid ${props => props.theme.background.defaultGrey};
  border-radius: ${props => props.theme.input.borderRadius.default};
  height: ${props => props.theme.input.height.default};
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  padding: 0 15px;
  height: 200px;
`;
