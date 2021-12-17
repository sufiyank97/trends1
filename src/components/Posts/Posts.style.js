import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Post = styled.div`
  display: flex;
  width: 230px;
  height: 230px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  border: 1px solid #000;
  background: ${props => props.img || '#fff'};
  background-size: cover;
  margin: 10px;

  div {
    display: flex;
    width: 50%;
    align-items: center;
    padding: 3px;
    color: #fff;

    p {
      text-align: baseline;
      font-size: 16px;
    }
  }

  p {
    padding: 3px;
    color: #fff;
    font-size: 18px;
  }

  img {
    height: 22px;
    width: 22px;
  }
`;
