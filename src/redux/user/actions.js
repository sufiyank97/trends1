const actions = {
  ADD_USER: 'ADD_USER',
  REMOVE_USER: 'REMOVE_USER',
  addUser: user => ({
    type: actions.ADD_USER,
    payload: {
      user
    }
  }),
  removeUser: () => ({
    type: actions.REMOVE_USER
  })
};

export default actions;
