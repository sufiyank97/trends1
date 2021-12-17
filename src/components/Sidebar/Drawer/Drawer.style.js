import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: fit-content; /* 100% Full-height */
  width: fit-content;
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 120px !important;
  background: ${props => props.theme.background.selected};
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
  padding: 20px;
  border: 1px solid black;

  @media (max-width: 875px) {
    left: 120px;
  }
`;
