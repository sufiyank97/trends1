import actions from './actions';

const initState = {
  user: {}
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actions.ADD_USER:
      return { ...state, user: action.payload.user };
    case actions.REMOVE_USER:
      return { ...initState };
    default:
      return state;
  }
};

export default reducer;
