import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%;
`;

export const SearchUsers = styled.form`
  display: flex;
  width: 100%;
  min-height: 4%;
  justify-content: flex-start;
  margin: 10px 0 0 0;

  input {
    height: 25px;
    width: 25%;
    padding-left: 5px;
    border-radius: 4px 0 0 4px;
    border: 1px solid #ccc;
    border-right: none;
    outline: none;
  }

  button {
    height: 25px;
    width: 25px;
    background: transparent;
    border: 1px solid #ccc;
    border-radius: 0 4px 4px 0;
    outline: none;

    :hover {
      cursor: pointer;
      background: #e5e5e5;
    }

    img {
      height: 10px;
      width: 10px;
    }
  }
`;

export const UsersWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  margin: 10px 0 0 0;
`;

export const UsersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 68%;
  overflow: auto;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  align-items: flex-start;
`;

export const UserCard = styled.div`
  display: flex;
  width: 47%;
  height: 70px;
  border: 1px solid #ccc;
  border-radius: 5px;
  align-items: center;
  margin: 5px;

  img {
    height: 40px;
    padding: 5px;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const SelectedUserCard = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  border: 1px solid #ccc;
  border-radius: 5px;
  align-items: center;
  margin: 5px;

  img {
    height: 40px;
    padding: 5px;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const SelectedUsersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 30%;
  overflow: auto;
  padding: 5px;
  border: 1px solid #ccc;
  height: 100%;
  border-radius: 5px;
  align-items: flex-start;
`;
